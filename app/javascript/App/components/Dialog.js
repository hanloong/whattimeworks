import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import EventListener from "react-event-listener";
import Overlay from "material-ui/internal/Overlay";
import RenderToLayer from "material-ui/internal/RenderToLayer";
import Paper from "material-ui/Paper";

function getStyles(props, context) {
  const { autoScrollBodyContent, open } = props;
  const { baseTheme: { spacing, palette }, dialog, zIndex } = context.muiTheme;

  const gutter = spacing.desktopGutter;

  return {
    root: {
      position: "fixed",
      boxSizing: "border-box",
      WebkitTapHighlightColor: "rgba(0,0,0,0)", // Remove mobile color flashing (deprecated)
      zIndex: zIndex.dialog,
      top: 0,
      left: open ? 0 : -10000,
      width: "100%",
      height: "100%"
    },
    content: {
      boxSizing: "border-box",
      WebkitTapHighlightColor: "rgba(0,0,0,0)", // Remove mobile color flashing (deprecated)
      position: "relative",
      width: "100%",
      maxWidth: spacing.desktopKeylineIncrement * 12,
      margin: "0 auto",
      zIndex: zIndex.dialog,
      top: "50%",
      transform: "translate(0, -50%)"
    },
    actionsContainer: {
      boxSizing: "border-box",
      WebkitTapHighlightColor: "rgba(0,0,0,0)", // Remove mobile color flashing (deprecated)
      padding: 8,
      width: "100%",
      textAlign: "right"
    },
    overlay: {
      zIndex: zIndex.dialogOverlay
    },
    title: {
      margin: 0,
      padding: `${gutter}px ${gutter}px 20px ${gutter}px`,
      color: palette.textColor,
      fontSize: dialog.titleFontSize,
      lineHeight: "32px",
      fontWeight: 400,
      marginBottom: autoScrollBodyContent ? -1 : 0,
      borderBottom: "none"
    },
    body: {
      fontSize: dialog.bodyFontSize,
      color: dialog.bodyColor,
      padding: `${props.title ? 0 : gutter}px ${gutter}px ${gutter}px`,
      boxSizing: "border-box",
      overflowY: autoScrollBodyContent ? "auto" : "hidden"
    }
  };
}

class DialogInline extends Component {
  static propTypes = {
    actions: PropTypes.node,
    actionsContainerClassName: PropTypes.string,
    actionsContainerStyle: PropTypes.object,
    autoDetectWindowHeight: PropTypes.bool,
    autoScrollBodyContent: PropTypes.bool,
    bodyClassName: PropTypes.string,
    bodyStyle: PropTypes.object,
    children: PropTypes.node,
    className: PropTypes.string,
    contentClassName: PropTypes.string,
    contentStyle: PropTypes.object,
    modal: PropTypes.bool,
    onRequestClose: PropTypes.func,
    open: PropTypes.bool.isRequired,
    overlayClassName: PropTypes.string,
    overlayStyle: PropTypes.object,
    repositionOnUpdate: PropTypes.bool,
    style: PropTypes.object,
    title: PropTypes.node,
    titleClassName: PropTypes.string,
    titleStyle: PropTypes.object
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.positionDialog();
  }

  componentDidUpdate() {
    this.positionDialog();
  }

  positionDialog() {
    const {
      actions,
      autoDetectWindowHeight,
      autoScrollBodyContent,
      bodyStyle,
      open,
      repositionOnUpdate,
      title
    } = this.props;

    if (!open) {
      return;
    }

    const clientHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    const container = ReactDOM.findDOMNode(this);
    const dialogContent = ReactDOM.findDOMNode(this.refs.dialogContent);
    const minPaddingTop = 0;

    // Reset the height in case the window was resized.
    dialogContent.style.height = "";

    const dialogWindowHeight = dialogContent.offsetHeight;
    let paddingTop = 0;

    // Vertically center the dialog window, but make sure it doesn't
    // transition to that position.
    if (repositionOnUpdate || !container.style.paddingTop) {
      container.style.paddingTop = `${paddingTop}px`;
    }

    // Force a height if the dialog is taller than clientHeight
    if (autoDetectWindowHeight || autoScrollBodyContent) {
      const styles = getStyles(this.props, this.context);
      styles.body = Object.assign(styles.body, bodyStyle);
      let maxDialogContentHeight = Math.min(500, clientHeight);

      if (title)
        maxDialogContentHeight -=
          dialogContent.previousSibling.offsetHeight +
          dialogContent.nextSibling.offsetHeight;

      dialogContent.style.maxHeight = `${maxDialogContentHeight}px`;
    }
  }

  requestClose(buttonClicked) {
    if (!buttonClicked && this.props.modal) {
      return;
    }

    if (this.props.onRequestClose) {
      this.props.onRequestClose(!!buttonClicked);
    }
  }

  handleTouchTapOverlay = () => {
    this.requestClose(false);
  };

  render() {
    const {
      actions,
      actionsContainerClassName,
      actionsContainerStyle,
      bodyClassName,
      bodyStyle,
      children,
      className,
      contentClassName,
      contentStyle,
      overlayClassName,
      overlayStyle,
      open,
      titleClassName,
      titleStyle,
      title,
      style
    } = this.props;

    const { prepareStyles } = this.context.muiTheme;
    const styles = getStyles(this.props, this.context);

    styles.root = Object.assign(styles.root, style);
    styles.content = Object.assign(styles.content, contentStyle);
    styles.body = Object.assign(styles.body, bodyStyle);
    styles.actionsContainer = Object.assign(
      styles.actionsContainer,
      actionsContainerStyle
    );
    styles.overlay = Object.assign(styles.overlay, overlayStyle);
    styles.title = Object.assign(styles.title, titleStyle);

    const actionsContainer =
      React.Children.count(actions) > 0 &&
      <div
        className={actionsContainerClassName}
        style={prepareStyles(styles.actionsContainer)}
      >
        {React.Children.toArray(actions)}
      </div>;

    return (
      <div className={className} style={prepareStyles(styles.root)}>
        {open &&
          <div className={contentClassName} style={styles.content}>
            <EventListener
              target="window"
              onResize={e => this.positionDialog()}
            />
            <Paper style={{ maxHeight: "100vh" }} zDepth={4}>
              <h3
                className={titleClassName}
                style={prepareStyles(styles.title)}
              >
                {title}
              </h3>
              <div
                ref="dialogContent"
                className={bodyClassName}
                style={prepareStyles(styles.body)}
              >
                {children}
              </div>
              {actionsContainer}
            </Paper>
          </div>}
        <Overlay
          show={open}
          className={overlayClassName}
          style={styles.overlay}
          onClick={this.handleTouchTapOverlay}
        />
      </div>
    );
  }
}

class Dialog extends Component {
  static propTypes = {
    actions: PropTypes.node,
    actionsContainerClassName: PropTypes.string,
    actionsContainerStyle: PropTypes.object,
    autoDetectWindowHeight: PropTypes.bool,
    autoScrollBodyContent: PropTypes.bool,
    bodyClassName: PropTypes.string,
    bodyStyle: PropTypes.object,
    children: PropTypes.node,
    className: PropTypes.string,
    contentClassName: PropTypes.string,
    contentStyle: PropTypes.object,
    modal: PropTypes.bool,
    onRequestClose: PropTypes.func,
    open: PropTypes.bool.isRequired,
    overlayClassName: PropTypes.string,
    overlayStyle: PropTypes.object,
    repositionOnUpdate: PropTypes.bool,
    style: PropTypes.object,
    title: PropTypes.node,
    titleClassName: PropTypes.string,
    titleStyle: PropTypes.object
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired
  };

  static defaultProps = {
    autoDetectWindowHeight: true,
    autoScrollBodyContent: false,
    modal: false,
    repositionOnUpdate: true
  };

  renderLayer = () => {
    return <DialogInline {...this.props} />;
  };

  render() {
    return (
      <RenderToLayer
        render={this.renderLayer}
        open={true}
        useLayerForClickAway={false}
      />
    );
  }
}

export default Dialog;

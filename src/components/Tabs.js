import React from "react";
import styles from "../utils/css";
import { Heading } from "./Text";

const TabItem = ({ title, onClick, active, last }) => {
  const classes = styles(
    "border border-medium border-archive-brown-400 archive-brown-400 bg-white p1 p3-md mr2 relative pointer flex1",
    active
      ? "border-bottom-style-none border-bottom-width-none border-bottom-transparent z2"
      : "z0",
    last ? "mr5" : ""
  );
  return (
    <>
      <button className={styles("hide block-md", classes)} onClick={onClick}>
        <Heading level="3" kind="bigfreedia" className="text-uppercase">
          {title}
        </Heading>
      </button>
      <button className={styles("hide-md", classes)} onClick={onClick}>
        <Heading level="3" kind="chromesparks" className="text-uppercase">
          {title}
        </Heading>
      </button>
    </>
  );
};

export const TabSection = ({ children, active = true }) => {
  const classes = styles(
    "border-x border-medium border-top border-bottom border-archive-brown-400 w100p bg-white relative z1 pb3 pb5-md",
    active ? "block" : "hide"
  );
  return (
    <div className={classes} style={{ width: "calc(100% + 3px)" }}>
      {children}
    </div>
  );
};

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab:
        this.props.activeTab === undefined ? 1 : this.props.activeTab - 1
    };
  }

  isActive(idx) {
    return idx === this.state.activeTab;
  }

  setActiveTab(idx) {
    this.setState(() => ({ activeTab: idx }));
  }

  render() {
    const children = this.props.children;
    const classes = styles(
      "col-10 flex flex-column items-center",
      this.props.className
    );

    return (
      <div className={classes}>
        <div className="relative b-3px flex w100p px1 px5-sm yscroll">
          {React.Children.map(children, (child, i) => (
            <TabItem
              title={child.props.tabTitle}
              onClick={() => this.setActiveTab(i)}
              active={this.isActive(i)}
              last={React.Children.length === i + 1}
            />
          ))}
        </div>
        {React.Children.map(children, (child, i) => (
          <TabSection active={this.isActive(i)}>{child}</TabSection>
        ))}
      </div>
    );
  }
}

export default Tabs;

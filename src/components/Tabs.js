import React from 'react';
import styles from '../utils/css';
import { Heading } from './Text';

const TabItem = ({ title, onClick, active, last }) => {
  const classes = styles(
    'border border-medium border-archive-brown-400 archive-brown-400 bg-white p3 mr2 relative pointer fz18px flex1',
    active ? 'border-bottom-none z2' : 'z0',
    last ? 'mr5' : ''
  );
  return (
    <button className={classes} onClick={onClick}>
      <Heading level="3" kind="chromesparks" className="text-uppercase">
        {title}
      </Heading>
    </button>
  );
};

export const TabSection = ({ children, active = true }) => {
  const classes = styles(
    'border-x border-medium border-top border-archive-brown-400 w100p px5 pt5 bg-white relative z1',
    active ? 'block' : 'hide'
  );
  return (
    <div className={classes} style={{ width: 'calc(100% + 3px)' }}>
      {children}
    </div>
  );
};

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: this.props.activeTab - 1 || 1 };
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
      'col-10 flex flex-column items-center mb10',
      this.props.className
    );

    const allChildren = React.Children;
    return (
      <div className={classes}>
        <div className="relative b-3px flex w100p px5">
          {React.Children.map(children, (child, i) => (
            <TabItem
              title={child.props.title}
              onClick={() => this.setActiveTab(i)}
              active={this.isActive(i)}
              last={allChildren.length === i + 1}
            />
          ))}
        </div>
        {React.Children.map(children, (child, i) => (
          <TabSection active={this.isActive(i)}>
            {child.props.children}
          </TabSection>
        ))}
      </div>
    );
  }
}

export default Tabs;

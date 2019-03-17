import React from 'react';
import styles from '../utils/css';
import { Heading } from './Text';

const TabItem = ({ title, onClick, active }) => {
  const classes = styles(
    'border border-medium border-archive-brown-400 archive-brown-400 bg-white p3 mr2 inline-block relative pointer fz18px',
    active ? 'border-bottom-none z2' : 'z0'
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
    this.state = { activeTab: 1 };
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
    return (
      <div className={classes}>
        <div className="relative b-6px">
          {React.Children.map(children, (child, i) => (
            <TabItem
              title={child.props.title}
              onClick={() => this.setActiveTab(i)}
              active={this.isActive(i)}
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

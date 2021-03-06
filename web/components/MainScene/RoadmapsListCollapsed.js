import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { updateSelectedRoadmap } from '../../ducks/growBoard';
import Javascript from '../../static/icons/javascript.svg';

const MainWrapper = styled.div`
  height: 87vh;
  overflow-y: scroll;
  padding-left: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .active {
    opacity: 1;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #ebeced;
  }

  ::-webkit-scrollbar {
    width: 9px;
    background-color: #ced5db;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #ced5db;
  }
`;

const MainItemWrapper = styled.div`
  margin-bottom: 15px;
  opacity: 0.33;
  transition: all 0.3s ease;

  :hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const IconWrapper = styled.div`
  width: 100%;
  svg {
    width: 25px;
    height: 25px;
  }
`;

const TitleWrapper = styled.div`
  color: #738393;
  font-size: 13px;
  font-weight: 500;
  opacity: ${props => (props.collapsedRoadmap ? '0' : '1')};
  visibility: ${props => (props.collapsedRoadmap ? 'hidden' : 'initial')};
  transition: all 0.3s ease;
`;

class RoadmapsListCollapsed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roadlist: [],
      selected: '',
    };
  }

  componentDidMount() {
    this.setState({
      roadlist: this.props.roadlist,
    });
  }

  RoadmapListItem = item => {
    return (
      <MainItemWrapper
        key={item.key}
        ref={`itemRoad${item.key}`}
        onClick={() => {
          this.setActiveClass(`itemRoad${item.key}`);
        }}
      >
        <IconWrapper>
          <Javascript />
        </IconWrapper>
      </MainItemWrapper>
    );
  };

  setActiveClass = element => {
    this.state.selected &&
      this.refs[this.state.selected].classList.remove('active');

    this.setState(
      {
        selected: element,
      },
      () => {
        this.props.updateSelectedRoadmap(element);
        this.refs[element].classList.add('active');
      }
    );
  };

  render() {
    return (
      <MainWrapper>
        {this.state.roadlist &&
          this.state.roadlist.map(item => <>{this.RoadmapListItem(item)}</>)}
      </MainWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedRoadmap: state.growBoardReducer.selectedRoadmap,
  };
}

const mapDispatchToProps = {
  updateSelectedRoadmap,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoadmapsListCollapsed);

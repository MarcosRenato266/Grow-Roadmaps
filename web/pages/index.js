import React from 'react';
import Wrapper from '../components/Common/DefaultWrapper';
import Content from '../components/MainScene/Content';
import Modules from '../components/MainScene/Modules';
import Roadmaps from '../components/MainScene/Roadmaps';

function index() {
  return (
    <Wrapper loggedin>
      <Roadmaps />
      <Modules />
      <Content />
    </Wrapper>
  );
}

export default index;
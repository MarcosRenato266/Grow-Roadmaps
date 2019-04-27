import React from 'react';
import Wrapper from '../components/Common/DefaultWrapper';
import Content from '../components/MainScene/Content';
import Modules from '../components/MainScene/Modules';
import Roadmaps from '../components/MainScene/Roadmaps';

export default function index() {
  return (
    <Wrapper>
      <Roadmaps />
      <Modules />
      <Content />
    </Wrapper>
  );
}

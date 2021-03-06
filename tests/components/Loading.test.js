import React from 'react';
import renderer from 'react-test-renderer';
import Loading from '../../src/components/Loading';

describe('Loading', () => {
  it('should render Loading', () => {
    const tree = renderer.create(
      <Loading
        size="32"
        color="primary"
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

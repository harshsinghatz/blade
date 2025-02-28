import FilePlusIcon from './';
import renderWithTheme from '~src/_helpers/testing/renderWithTheme.native';

describe('<FilePlusIcon />', () => {
  it('should render FilePlusIcon', () => {
    const renderTree = renderWithTheme(
      <FilePlusIcon color="feedback.icon.neutral.lowContrast" size="large" />,
    ).toJSON();
    expect(renderTree).toMatchSnapshot();
  });
});

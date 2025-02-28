import BookIcon from './';
import renderWithTheme from '~src/_helpers/testing/renderWithTheme.native';

describe('<BookIcon />', () => {
  it('should render BookIcon', () => {
    const renderTree = renderWithTheme(
      <BookIcon color="feedback.icon.neutral.lowContrast" size="large" />,
    ).toJSON();
    expect(renderTree).toMatchSnapshot();
  });
});

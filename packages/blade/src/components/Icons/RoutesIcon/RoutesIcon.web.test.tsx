import RoutesIcon from '.';
import renderWithTheme from '~src/_helpers/testing/renderWithTheme.web';

describe('<RoutesIcon />', () => {
  it('should render RoutesIcon', () => {
    const { container } = renderWithTheme(
      <RoutesIcon color="feedback.icon.neutral.lowContrast" size="large" />,
    );
    expect(container).toMatchSnapshot();
  });
});

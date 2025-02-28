import VideoIcon from './';
import renderWithTheme from '~src/_helpers/testing/renderWithTheme.web';

describe('<VideoIcon />', () => {
  it('should render VideoIcon', () => {
    const { container } = renderWithTheme(
      <VideoIcon color="feedback.icon.neutral.lowContrast" size="large" />,
    );
    expect(container).toMatchSnapshot();
  });
});

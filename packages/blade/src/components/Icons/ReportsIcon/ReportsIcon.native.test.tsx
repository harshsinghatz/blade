import ReportsIcon from './';
import renderWithTheme from '~src/_helpers/testing/renderWithTheme.native';

describe('<ReportsIcon />', () => {
  it('should render ReportsIcon', () => {
    const renderTree = renderWithTheme(
      <ReportsIcon color="feedback.icon.neutral.lowContrast" size="large" />,
    ).toJSON();
    expect(renderTree).toMatchSnapshot();
  });
});

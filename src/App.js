// routes
import { Routers } from './routes';
// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
// components
import { BaseOptionChartStyle } from './components/charts/BaseOptionChart';

export default function App() {
  return (
    <ThemeConfig>
      <GlobalStyles />
      <BaseOptionChartStyle />
      <Routers />
    </ThemeConfig>
  );
}

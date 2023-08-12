import * as React from "react";

declare interface SampleUMDAppProps {
  multiplier?: number;
}

declare class SampleUMDApp extends React.Component<SampleUMDAppProps> {
  constructor(props: SampleUMDAppProps);
  render(): React.ReactNode;
}

export default SampleUMDApp;

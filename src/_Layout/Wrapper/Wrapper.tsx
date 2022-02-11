import { AppProps } from 'next/dist/shared/lib/router/router'

import PageLayout from '_Layout/Page/PageLayout'

type LayoutProps = AppProps & {
  layout: 'default' | 'auth' | 'basic'
}

const LayoutWrapper = ({
  layout = 'default',
  ...props
}: LayoutProps): JSX.Element => {
  switch (layout) {
    case 'basic':
      return <PageLayout>{props.children}</PageLayout>
    default:
      return <PageLayout>{props.children}</PageLayout>
  }
}

export default LayoutWrapper

import { AppProps } from 'next/dist/shared/lib/router/router'

import PageLayout from '_Layout/Page/PageLayout'

type LayoutProps = AppProps & {
  layout: 'default' | 'auth' | 'basic' | 'full'
}

const LayoutWrapper = ({
  layout = 'default',
  ...props
}: LayoutProps): JSX.Element => {
  switch (layout) {
    case 'full':
      // Full width layout without container restrictions
      return <>{props.children}</>
    case 'basic':
      return <PageLayout>{props.children}</PageLayout>
    default:
      return <PageLayout>{props.children}</PageLayout>
  }
}

export default LayoutWrapper

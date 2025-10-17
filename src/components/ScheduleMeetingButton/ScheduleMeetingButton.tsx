import { Button, useColorMode, ButtonProps } from '@chakra-ui/react'

interface ScheduleMeetingButtonProps {
  variant?: 'outline' | 'solid'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
}

export const ScheduleMeetingButton = ({
  variant = 'outline',
  size = 'lg',
  fullWidth = false
}: ScheduleMeetingButtonProps) => {
  const { colorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  const borderColor: string = isDark ? '#F97316' : '#2563EB'
  const color: string = isDark ? '#F97316' : '#2563EB'

  return (
    <Button
      variant={variant}
      size={size}
      w={fullWidth ? 'full' : 'auto'}
      borderColor={borderColor}
      color={color}
      _hover={
        {
          bg: borderColor,
          color: 'white'
        } as ButtonProps['_hover']
      }
      onClick={() =>
        window.open(
          'https://onetwo-tech.baseportal.io/forms/2a45e044-ea9f-4ac3-aa12-b46af5066081',
          '_blank'
        )
      }
    >
      📅 Agendar Mentoria
    </Button>
  )
}

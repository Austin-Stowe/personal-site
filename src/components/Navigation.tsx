import { FC } from 'react'
import { Box, Drawer } from '@mui/material'

interface Props {
  open: boolean
  onClose: () => void
}

const Navigation: FC<Props> = ({ open, onClose }) => {
  return (
    <Drawer open={open} anchor={'left'} onClose={onClose}>
      <Box sx={{ width: 'auto' }}>
        <p> Test </p>
      </Box>
    </Drawer>
  )
}

export default Navigation

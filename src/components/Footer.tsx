import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
  return (
    <footer className="flex text-neutral-500 space-x-3 justify-center">
      <a href="https://instagram.com/hackatbla/"><InstagramIcon sx={{ fontSize: 45 }} /></a>
      <a href="mailto:latinacademycs@gmail.com"><MailOutlineIcon sx={{ fontSize: 45 }} /></a>
      <a href="https://github.com/hackclub/"><GitHubIcon sx={{ fontSize: 45 }} /></a>
    </footer>
  )
}
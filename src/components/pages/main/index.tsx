import { FC } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Paper } from '@material-ui/core';
import { SvgIconComponent, Public, Games, ListSharp, Settings, Group, GroupAdd, ExitToApp } from '@material-ui/icons';

interface IMenuItem {
  title: string;
  path: string;
  icon: SvgIconComponent;
};

const useStyles = makeStyles(({ spacing }) => ({
  box: {
    padding: spacing()
  },
  menu: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > a': {
      color: '#ffffff',
      textDecoration: 'none'
    }
  },
  menuItem: {
    borderRadius: 3,
    flexGrow: 0,
    flexShrink: 0,
    minWidth: 70,
    textAlign: 'center',
    border: `1px solid #999`,
    padding: spacing(),
    margin: spacing()
  }
}));

const menuItems:Array<IMenuItem> = [
  { title: 'play', path: '/play', icon: Public },
  { title: 'create', path: '/create', icon: GroupAdd },
  { title: 'join', path: '/join', icon: Group },
  { title: 'games', path: '/games', icon: Games },
  { title: 'tasks', path: '/tasks', icon: ListSharp },
  { title: 'settings', path: '/settings', icon: Settings },
  { title: 'exit', path: '/signout', icon: ExitToApp },
];

export const MainPage: FC = () => {
  const cls = useStyles();

  return (
    <div className={ cls.box }>
      <Paper>
        <div className={ cls.menu }>
          {
            menuItems.map(({ title, path, icon: ItemIcon }) => (
              <Link to={ path } key={ title }>
                <div className={ cls.menuItem } >
                  <ItemIcon />
                  <div>{ title }</div>
                </div>
              </Link>
            ))
          }
        </div>
      </Paper>
    </div>
  );
};
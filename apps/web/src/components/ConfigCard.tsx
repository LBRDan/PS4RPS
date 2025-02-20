import cs from 'classnames';
import React, { ReactNode } from 'react';

import styles from './ConfigCard.module.less';
import { Link } from './Link';

type Props = {
  title: string;
  isActive?: boolean;
  action?: ReactNode;
  onClick?: () => void;
};

const ActionIcon = (props: { children: ReactNode; onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void }) => {
  return (
    <Link
      hoverable={false}
      onClick={e => {
        e.stopPropagation();
        props.onClick?.(e);
      }}
    >
      <div className={styles['action-icon-wrapper']}>{props.children}</div>
    </Link>
  );
};

export const ConfigCard = ({ title, action, isActive, onClick }: Props) => {
  return (
    <div
      className={cs(styles.wrapper, isActive && styles.active)}
      onClick={() => {
        onClick?.();
      }}
    >
      <div className={styles.content}>
        <Link canceldUnderline={true} hoverable={false}>
          {title}
        </Link>
      </div>
      {action && <div className={styles.action}>{action}</div>}
    </div>
  );
};

ConfigCard.ActionIcon = ActionIcon;

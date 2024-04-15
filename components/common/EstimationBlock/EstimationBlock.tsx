import React, { useEffect, useState } from 'react';

import { StarSVG } from '@components';
import clsx from 'clsx';
import styles from './EstimationBlock.module.scss';

interface EstimationBlockProps {
  estimation?: number;
  size?: number;
  using?: boolean;
  className?: string;
  onChange?: React.ChangeEventHandler;
}

export const EstimationBlock: React.FC<EstimationBlockProps> = ({
  className = '',
  size = 20,
  estimation,
  onChange,
  using = false,
}) => {
  const stars = [0, 1, 2, 3, 4];
  const [estimationInteger, setEstimationInteger] = useState<number>(0);
  const [onMouseId, setOnMouseId] = useState<number>(0);

  useEffect(() => {
    if (estimation !== undefined) setOnMouseId(Math.round(estimation));
    if (onMouseId !== undefined) setEstimationInteger(onMouseId);
  }, [onMouseId, estimation]);

  const handlerMouseLeave = () => {
    if (onMouseId !== estimationInteger) setEstimationInteger(onMouseId);
  };
  const handlerMouseEnter = (i: number) => {
    if (i !== onMouseId && i >= onMouseId) setEstimationInteger(i);
  };

  if (using) {
    return (
      <div
        className={clsx(styles.Estimation, styles.Estimation_using, className)}
      >
        {stars.map((item) => {
          return (
            <div
              key={item}
              className={clsx(
                5 - item <= estimationInteger && styles.Estimation__item_active
              )}
              onMouseEnter={() => handlerMouseEnter(5 - item)}
              onMouseLeave={() => handlerMouseLeave()}
            >
              <input
                type={'radio'}
                name={'rating'}
                value={5 - item}
                id={`star-${5 - item}`}
                onChange={onChange}
              />
              <label
                htmlFor={`star-${5 - item}`}
                title={`Оценка «${5 - item}»`}
              >
                <StarSVG width={size} path="full" />
              </label>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className={clsx(styles.Estimation, className)}>
        {stars &&
          stars.length > 0 &&
          stars.map((item) => {
            return (
              <div
                key={item}
                className={clsx(
                  styles.Estimation__item,
                  item + 1 <= estimationInteger &&
                    styles.Estimation__item_active
                )}
              >
                <StarSVG width={size} path="full" />
              </div>
            );
          })}
      </div>
    );
  }
};

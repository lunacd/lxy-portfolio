/**
 * Adapted from https://codepen.io/flik185/pen/WxwLdX?editors=1100
 */
import styles from "./ScrollIndicator.module.css";
import classNames from "classnames";

interface ScrollIndicatorProps {
  light: boolean;
}

export default function ScrollIndicator(props: ScrollIndicatorProps) {
  return (
    <div
      className={classNames(styles.container, {
        [styles.circleLight]: props.light,
        [styles.circleDark]: !props.light,
      })}
    >
      <div className={`${styles.circleTop} ${styles.circle}`}></div>
      <div className={styles.circle}></div>
      <div className={`${styles.circleBottom} ${styles.circle}`}></div>
      <svg
        className={styles.svg}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 612 612"
      >
        <path
          fill="currentColor"
          d="M317.5,487.6c0.3-0.3,0.4-0.7,0.7-1.1l112.6-112.6c6.3-6.3,6.3-16.5,0-22.7c-6.3-6.3-16.5-6.3-22.7,0
					l-86,86V136.1c0-8.9-7.3-16.2-16.2-16.2c-8.9,0-16.2,7.3-16.2,16.2v301.1l-86-86c-6.3-6.3-16.5-6.3-22.7,0
					c-6.3,6.3-6.3,16.5,0,22.7l112.7,112.7c0.3,0.3,0.4,0.7,0.7,1c0.5,0.5,1.2,0.5,1.7,0.9c1.7,1.4,3.6,2.3,5.6,2.9
					c0.8,0.2,1.5,0.4,2.3,0.4C308.8,492.6,313.8,491.3,317.5,487.6z"
        />
      </svg>
    </div>
  );
}

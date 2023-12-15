import React from 'react';
import styles from './Rating.module.scss';
// import cn from 'classnames';

function Rating({ rating }) {
	return (
		<div className={styles.container}>
			{[...Array(rating)].map((_, key) => {
				return <div key={key} className={styles.star}></div>;
			})}
		</div>
	);
}

export default Rating;

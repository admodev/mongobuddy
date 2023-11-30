// Modules
import * as React from 'react';

// Components
import SideNavComponent from '../Components/SideNav';
import HeaderComponent from '../Components/Header';
import CardComponent from '../Components/Card';

// Styles
import styles from './Home.module.css';

const HomeView = () => {
  const [queryText, setQueryText] = React.useState('');

  return(
    <div className={styles.mainContainer}>
      <HeaderComponent />
      <div className={styles.contentContainer}>
        <SideNavComponent />
        <CardComponent>
          <h2>Your query: </h2>
          <p>
            {!queryText ? 'Query goes here...' : queryText}
          </p>
          <textarea className={styles.queryText} name="query" placeholder="Your query goes here..." cols="60" rows="20" maxlength="300" required value={queryText} onChange={(e) => setQueryText(e.target.value)}></textarea>
        </CardComponent>
      </div>
    </div>
  );
};

export default HomeView;

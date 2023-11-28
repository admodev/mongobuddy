// Modules
import * as React from 'react';

// Components
import SideNavComponent from '../Components/SideNav';
import HeaderComponent from '../Components/Header';
import CardComponent from '../Components/Card';

// Styles
import styles from './Home.module.css';

const HomeView = () => {
  return(
    <div className={styles.mainContainer}>
      <HeaderComponent />
      <div className={styles.contentContainer}>
        <SideNavComponent />
        <CardComponent>
          <h2>Your query: </h2>
          <p>
            {'Example query, delete this and add functional queries for documents and db edition here...'}
            const cursor = db.collection('inventory').find(&#123;
            status: 'A',
            qty: &#123; $lt: 30 &#125;
            &#125;);
          </p>
        </CardComponent>
      </div>
    </div>
  );
};

export default HomeView;

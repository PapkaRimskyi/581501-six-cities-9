import React from 'react';

import CitiesList from './cities-list/cities-list';

function Cities() {
  return (
    <div className="tabs">
      <section className="locations container">
        <CitiesList />
      </section>
    </div>
  );
}

export default React.memo(Cities);

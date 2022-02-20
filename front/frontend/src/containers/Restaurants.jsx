import React, { Fragment } from 'react';

export const Restaurants = () => {

  useEffect(() => {
    fetchRestaurants()
    .then((data) =>
      console.log(data)
    )
  }, [])

  return (
    <Fragment>
      レストラン一覧
    </Fragment>
  )
}

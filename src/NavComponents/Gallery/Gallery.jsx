import React from 'react'
import GallerySection from './components/GallerySection'
import Header from './components/Header'
import MakeanEventNow from './components/MakeanEventNow'
import MapSection from './components/MapSection'

const Gallery = () => {
  return (
    <>
      <Header />
      <GallerySection />
      <MapSection />
      <MakeanEventNow/>
    </>
  )
}

export default Gallery

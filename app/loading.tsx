'use client'

export default function Loading() {
  return (
    <div className="loader">
      <div className="loader-content">
        <div className="loader-text">Loading...</div>
        <div className="loader-bar">
          <div className="loader-progress"></div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'

export default function ModelMainPro({children, id}) {
  return <main className='two-col' id={id}>
    {children}
    </main>;

}

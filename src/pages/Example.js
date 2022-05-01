import React, { useRef, useState, useEffect } from 'react'
import Img from '../assets/images/macbook.png'
import Chart from '../components/Charts/Chart'
import useDialog from '../components/Dialogs/useDialog'
import Dialog from '../components/Dialogs/Dialog'
import styled from 'styled-components'

const Document = styled.section`
  margin: 3rem 0;
  border: 1px solid var(--primary);
`

function Example() {
  const ref = useRef()

  const [isDialog, toggleDialog] = useDialog()
  const toggleButton = () => toggleDialog(!isDialog)

  return (
    <div>
      <div className="pb-3">
        <h1 className="display-1 pb-4"></h1>
        <figcaption className="blockquote-footer">
          Static Pages, by iduk
        </figcaption>

        {/* <div className="grid btns my-2">
          <button className="btn anim-bg-gradient">
            Gradient Animate Button
          </button>
        </div> */}
      </div>

      <Document>
        <h5>Dialog</h5>
        <div className="py-4 text-center">
          <button className="btn btn-primary p-3" onClick={toggleButton}>
            Dialog
          </button>

          <Dialog
            open={isDialog}
            toggle={toggleDialog}
            className={'max-w-xs mt-8'}
            width="300px"
          >
            <h5>안녕하세요 모달입니다</h5>
            <button className="btn p-2" onClick={() => toggleDialog(false)}>
              [Close]
            </button>
          </Dialog>
        </div>
      </Document>

      <Document>
        <h5>12 Grid Columns</h5>
        <p>.row, .col-{'{number}'}</p>

        <div className="row my-3">
          <div className="col-6 border">
            <div className="column-size bg-gray">element</div>
          </div>
          <div className="col-6 border">
            <div className="column-size bg-gray">element</div>
          </div>
        </div>
        <div className="row">
          <div className="col-3 border">
            <div className="column-size bg-gray">element</div>
          </div>
          <div className="col-3 border">
            <div className="column-size bg-gray">element</div>
          </div>
          <div className="col-3 border">
            <div className="column-size bg-gray">element</div>
          </div>
          <div className="col-3 border">
            <div className="column-size bg-gray">element</div>
          </div>
        </div>
      </Document>

      <Document>
        <h5>Typography</h5>
        <div className="py-4 text-center overflow-hidden">
          <div className="flex flex-wrap gap-4 items-center">
            <p className="text-xs">xs</p>
            <p className="text-sm">sm</p>
            <p className="text-md">md</p>
            <p className="text-lg">lg</p>
            <p className="text-xl">xl</p>
            <p className="text-2xl">2xl</p>
            <p className="text-3xl">3xl</p>
          </div>
        </div>
        <div className="py-4 text-center">
          <div className="flex flex-wrap gap-4 items-center">
            <p className="h6">H6</p>
            <p className="h5">H5</p>
            <p className="h4">H4</p>
            <p className="h3">H3</p>
            <p className="h2">H2</p>
            <p className="h1">H1</p>
          </div>
        </div>
        <div className="py-8 text-center">
          <div className="flex flex-wrap gap-4 items-center">
            <p className="font-thin">thin</p>
            <p className="font-light">light</p>
            <p className="font-normal">normal</p>
            <p className="font-medium">medium</p>
            <p className="font-bold">bold</p>
            <p className="font-extrabold">extrabold</p>
          </div>
        </div>
      </Document>

      <Document>
        <h5>Colors</h5>
        <p>.bg-{'{theme}'}</p>
        <div className="mt-3 flex gap-2">
          <span className="p-2 bg-primary">primary</span>
          <span className="p-2 bg-secondary">secondary</span>
        </div>
        <div>
          <span className="box bg-primary-100" />
          <span className="box bg-primary-100" />
          <span className="box bg-primary-200" />
          <span className="box bg-primary-300" />
          <span className="box bg-primary-400" />
          <span className="box bg-primary-500" />
          <span className="box bg-primary-600" />
          <span className="box bg-primary-700" />
          <span className="box bg-primary-800" />
          <span className="box bg-primary-900" />
        </div>
      </Document>

      <Document>
        <h5>3D Transform Effect</h5>
        <article>
          <figure className="effect" style={{ maxWidth: 500 }}>
            <img
              className="effect--child img-fluid"
              src={Img}
              alt="Image description"
            />
          </figure>
        </article>
      </Document>

      <Document>
        <h5>Scroll Snap</h5>

        <div className="scroll-snap" style={{ height: 300, maxWidth: 300 }}>
          <span className="scroll-snap__child">
            <h1>1</h1>
          </span>
          <span className="scroll-snap__child">
            <h1>2</h1>
          </span>
          <span className="scroll-snap__child">
            <h1>3</h1>
          </span>
          <span className="scroll-snap__child">
            <h1>4</h1>
          </span>
        </div>
      </Document>
    </div>
  )
}

export default Example

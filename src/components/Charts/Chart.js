/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react'
import { ResponsiveStream } from '@nivo/stream'

const idukColors = ['#03C8B1', '#5AA8FF', '#D44086', '#EC9936', '#FFCC00']

const StreamChart = ({ data }) => (
  <ResponsiveStream
    data={data}
    keys={['No1', 'No2', 'No3', 'No4', 'No5', 'No6']}
    colors={idukColors}
    borderColor={{ theme: 'background' }}
    borderWidth={3}
    fillOpacity={0.85}
    dotSize={8}
    dotColor={{ theme: 'background' }}
    dotBorderColor={{ from: 'color', modifiers: [['opacity', 0.75]] }}
    margin={{ top: 0, right: 0, bottom: 40, left: 0 }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: 'bottom',
      tickSize: 11,
      tickPadding: 5,
      tickRotation: 0,
      // legend: '',
      // legendOffset: 36,
    }}
    axisLeft={{
      orient: 'left',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
    }}
    enableGridX={true}
    enableGridY={false}
    curve="natural"
    offsetType="none"
    defs={[
      {
        id: 'dots',
        type: 'patternLines', // pattern: Dots, Lines, Squares
        background: 'inherit',
        color: 'rgba(000,000,000, 0.15)',
        spacing: 8,
        rotation: -60,
        lineWidth: 3,
      },
      {
        id: 'squares',
        type: 'patternSquares',
        background: 'inherit',
        color: 'rgba(000,000,000, 0.15)',
        size: 8,
        padding: 4,
        stagger: true,
      },
    ]}
    fill={[
      {
        match: {
          id: 'Paul',
        },
        id: 'dots',
      },
      {
        match: {
          id: 'Marcel',
        },
        id: 'squares',
      },
    ]}
    motionConfig="gentle"

    // legends={[
    //   {
    //     anchor: 'top',
    //     direction: 'row',
    //     translateX: 50,
    //     itemWidth: 80,
    //     itemHeight: 20,
    //     itemTextColor: '#fff',
    //     symbolSize: 12,
    //     symbolShape: 'circle',
    //     effects: [
    //       {
    //         on: 'hover',
    //         style: {
    //           itemTextColor: '#fff',
    //           itemOpacity: '0.7',
    //         },
    //       },
    //     ],
    //   },
    // ]}
  />
)

export default function Chart() {
  return (
    <div className="w-100 text-black" style={{ height: 400 }}>
      <StreamChart
        data={[
          {
            No1: 124,
            No2: 196,
            No3: 52,
            No4: 135,
            No5: 87,
            No6: 63,
          },
          {
            No1: 70,
            No2: 175,
            No3: 31,
            No4: 110,
            No5: 174,
            No6: 177,
          },
          {
            No1: 144,
            No2: 121,
            No3: 162,
            No4: 19,
            No5: 177,
            No6: 104,
          },
          {
            No1: 56,
            No2: 70,
            No3: 32,
            No4: 80,
            No5: 65,
            No6: 120,
          },
          {
            No1: 186,
            No2: 99,
            No3: 131,
            No4: 87,
            No5: 128,
            No6: 144,
          },
        ]}
      />
    </div>
  )
}

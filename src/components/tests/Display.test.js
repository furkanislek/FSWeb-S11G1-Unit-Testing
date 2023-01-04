import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './../Display';
import { exampleShowData } from "./sampleData"
import userEvent from '@testing-library/user-event'


describe("Display testleri", () => {
  beforeEach(() => {
    render(<Display />);
  })

  test('butona sayfada mı', () => {
    const getButton = screen.getByTestId("get-data");
    expect(getButton).toBeInTheDocument();
  });

  test('sezon sayısı doğru mu?', async () => {
    const getButton = screen.getByTestId("get-data");
    userEvent.click(getButton);
    const options = await waitFor(() => screen.getAllByTestId("season-option"));
    console.log(options);

    expect(options.length).toBe((exampleShowData.seasons.length)+1);
  });

  // butona clickle

  // await yap, season-option elemanları getAllByTestId ile seç
  // bunun uzunluğunu, exampleShowData.seasons.length ile kıyasla
});

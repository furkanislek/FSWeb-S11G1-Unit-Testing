import React from "react";
import { render, fireEvent, screen, rerender } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Episode from "./../Episode";
import { exampleEpisodeData, anotherEpisodeData } from "./sampleData";
import { fallbackEpisodeImg } from "./../data"


describe("Düzgün örnek veriyle çalışıyor mu?", () => {
  beforeEach(() => {
    render(<Episode episode={exampleEpisodeData} />)
  })

  test("Sorunsuz render oluyor mu?", () => {
    const epKutusu = screen.getByTestId("ep-kutusu");
    expect(epKutusu).toBeInTheDocument();
  });

  test("İsim doğru mu?", () => {
    const epName = screen.getByTestId("ep-name");
    expect(epName.textContent).toBe(exampleEpisodeData.name)
  });

  test("No doğru mu?", () => {
    const epNo = screen.getByTestId("ep-no");
    expect(epNo.textContent).toBe(`Season ${exampleEpisodeData.season}, Episode ${exampleEpisodeData.number}`)
  });

})

// const { rerender } = render(<Episode episode={exampleEpisodeData} />);

describe("Değiştirilmiş veriyle çalışıyor mu?", () => {
  beforeEach(() => {
    render(<Episode episode={anotherEpisodeData} />)
  })
  test("image tanımlanmadığında default image render ediliyor", () => {
    const epImg = screen.getByTestId("ep-img");
    expect(epImg.src).toBe(fallbackEpisodeImg);
  });

  test("İsim doğru mu?", () => {
    const epName = screen.getByTestId("ep-name");
    expect(epName.textContent).toBe(anotherEpisodeData.name)
  });

  test("No doğru mu?", () => {
    const epNo = screen.getByTestId("ep-no");
    expect(epNo.textContent).toBe(`Season ${anotherEpisodeData.season}, Episode ${anotherEpisodeData.number}`)
  });
})



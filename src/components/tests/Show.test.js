import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Show from './../Show';


describe("Show none prop değeriyle çalışıyor mu?", () => {
  beforeEach(() => {
    render(<Show show="none" selectedSeason="none" />)
  })

  test('sayfada render ediliyor', () => {
    const uyariKutusu = screen.getByTestId("bozuk-data-uyarisi");
    expect(uyariKutusu).toBeInTheDocument();
  });
})

describe("show=null olduğunda", () => {
  beforeEach(() => {
    render(<Show show={null} />)
  })

  test('Loading görünüyor mu?', () => {
    const loadingKutusu = screen.getByTestId("loading-container");
    expect(loadingKutusu.textContent).toBe("Fetching data...");
  });
})






test('Loading bileşeni show propu null ken render ediliyor', () => { });

test('aynı sayıda sezon optionları render ediliyor', () => { });

test('sezon seçiliyken handleSelect çağırılıyor', () => { });

test('sezon seçili değilken bileşen render ediliyor ve sezon seçildiğinde yeniden render ediliyor', () => { });

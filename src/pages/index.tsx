/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as React from 'react';
import Select from 'react-select';

import { DataMatkul, dataMatkul } from '@/data/matkul';

import Seo from '@/components/Seo';
import Footer from '@/components/Footer';
import CustomLink from '@/components/CustomLink';
import ButtonLink from '@/components/ButtonLink';
import FaqSection from '@/components/FaqSection';

export default function Home() {
  const [sem, setSem] = React.useState<string>('6');
  const filteredData = React.useMemo(() => dataMatkul.filter((datum) => datum.sem === sem), [sem]);

  const [matkul, setMatkul] = React.useState<DataMatkul>(filteredData[0]);
  React.useEffect(() => {
    setMatkul(filteredData[0]);
  }, [filteredData]);

  const [kelas, setKelas] = React.useState<string>('A');

  const matkulOptions = filteredData.map((item) => ({
    label: item.nama,
    value: item.kode,
  }));

  const mkSemester = 2;
  const mkYear = 2021;

  return (
    <>
      <Seo />

      <main>
        <section className='relative'>
          <div className='min-h-screen py-16 space-y-10 layout'>
            <h1 className='mb-8'>Daftar Kelas Informatika</h1>
            <div className='space-y-4'>
              <h3>1. Login MyITS SI Akademik</h3>
              <p className='text-gray-700 !mt-2'>
                Buka sampai <b>SIAKAD</b>, jangan sampe dashboard doang.{' '}
                <CustomLink href='https://i.imgur.com/aAf0YKh.png'>Contoh tampilan seperti ini</CustomLink>
              </p>
              <ButtonLink variant='secondary' href='https://akademik.its.ac.id/myitsauth.php'>
                Open My ITS
              </ButtonLink>
            </div>
            <div className='space-y-4'>
              <h3>2. Pilih Semester</h3>
              <p className='text-gray-700 !mt-2'>
                Belom lengkap, minta bantu{' '}
                <CustomLink href='https://github.com/theodorusclarence/its-class-helper/blob/main/src/data/matkul.ts'>
                  PR ke repo
                </CustomLink>
              </p>
              <select
                name='select'
                id='semester'
                className='py-2 pl-2 pr-8 border border-gray-300 rounded-md focus:border-primary-400 focus:ring-primary-400'
                value={sem}
                onChange={(e) => setSem(e.target.value)}
              >
                {[...new Array(8)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
            <div className='space-y-4'>
              <h3>3. Pilih Matkul</h3>
              <div className='react-select-custom'>
                <Select
                  key={`select-${sem}`}
                  onChange={(newValue) => {
                    setMatkul(dataMatkul.find((datum) => datum.kode === newValue?.value)!);
                  }}
                  defaultValue={matkulOptions[0]}
                  theme={(theme) => ({
                    ...theme,
                    colors: {
                      ...theme.colors,
                      primary: '#0284C7',
                    },
                  })}
                  className='max-w-md'
                  options={matkulOptions}
                />
              </div>
            </div>
            <div className='space-y-4'>
              <h3>4. Kelas</h3>
              <select
                name='select'
                id=''
                className='py-2 pl-2 pr-8 border border-gray-300 rounded-lg focus:border-primary-400 focus:ring-primary-400'
                value={kelas}
                onChange={(e) => setKelas(e.target.value)}
              >
                {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className='space-y-4'>
              <h3>5. Open Link</h3>
              <p className='text-gray-700 !mt-2'>
                https://akademik.its.ac.id/lv_peserta.php
                <br />
                ?mkJur=
                <span className='text-primary-400'>{matkul?.mkjur}</span>
                <br />
                {'&'}
                mkID=
                <span className='text-primary-400'>{matkul?.kode}</span>
                <br />
                {'&'}
                mkSem={mkSemester}
                {'&'}mkThn={mkYear}
                <br />
                {'&'}
                mkKelas=
                <span className='text-primary-400'>{kelas.toUpperCase()}</span>
              </p>

              <ButtonLink
                variant='secondary'
                href={`https://akademik.its.ac.id/lv_peserta.php?mkJur=${matkul?.mkjur}&mkID=${
                  matkul?.kode
                }&mkSem=${mkSemester}&mkThn=${mkYear}&mkKelas=${kelas.toUpperCase()}`}
              >
                Open Daftar Kelas
              </ButtonLink>
            </div>

            <FaqSection />
          </div>
          <Footer />
        </section>
      </main>
    </>
  );
}

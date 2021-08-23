import * as React from 'react';

import { DataMatkul, dataMatkul } from '@/data/matkul';

import Seo from '@/components/Seo';
import Footer from '@/components/Footer';
import CustomLink from '@/components/CustomLink';
import ButtonLink from '@/components/ButtonLink';

export default function Home() {
  const [sem, setSem] = React.useState<string>('5');
  const [matkul, setMatkul] = React.useState<DataMatkul | undefined>(
    dataMatkul.find((datum) => datum.kode === 'IF4501')
  );
  const [kelas, setKelas] = React.useState<string>('A');

  const filteredData = dataMatkul.filter((datum) => datum.sem === sem);

  const handleMatkul = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMatkul(dataMatkul.find((datum) => datum.kode === e.target.value));
  };

  return (
    <>
      <Seo />

      <main>
        <section className='bg-dark'>
          <div className='min-h-screen py-16 space-y-10 text-white layout'>
            <h1 className='mb-8'>Daftar Kelas Informatika</h1>
            <div className='space-y-4'>
              <h3>1. Login MyITS SI Akademik</h3>
              <p className='text-gray-300 !mt-2'>
                Buka sampai muncul{' '}
                <CustomLink href='https://i.imgur.com/aAf0YKh.png'>
                  tampilan seperti ini
                </CustomLink>
              </p>
              <ButtonLink
                variant='secondary'
                href='https://akademik.its.ac.id/'
              >
                Open My ITS
              </ButtonLink>
            </div>
            <div className='space-y-4'>
              <h3>2. Pilih Semester</h3>
              <p className='text-gray-300 !mt-2'>
                Belom lengkap, minta bantu{' '}
                <CustomLink href='https://github.com/theodorusclarence/its-class-helper/blob/main/src/data/matkul.ts'>
                  PR ke repo
                </CustomLink>
              </p>
              <select
                name='select'
                id='semester'
                className='py-2 pl-4 pr-8 border border-gray-700 rounded-lg bg-dark'
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
              <select
                name='select'
                id='matkul'
                className='py-2 pl-4 pr-8 border border-gray-700 rounded-lg bg-dark'
                value={matkul?.kode}
                onChange={handleMatkul}
              >
                {filteredData.map((item) => (
                  <option key={item.kode} value={item.kode}>
                    {item.nama}
                  </option>
                ))}
              </select>
            </div>
            <div className='space-y-4'>
              <h3>4. Kelas</h3>
              <select
                name='select'
                id=''
                className='py-2 pl-4 pr-8 border border-gray-700 rounded-lg bg-dark'
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
              <p className='text-gray-300 !mt-2'>
                https://akademik.its.ac.id/lv_peserta.php?mkJur=
                <span className='text-primary-400'>{matkul?.mkjur}</span>
                {'&'}mkID=
                <span className='text-primary-400'>{matkul?.kode}</span>
                {'&'}mkSem=1{'&'}mkThn=2021{'&'}mkKelas=
                <span className='text-primary-400'>{kelas.toUpperCase()}</span>
              </p>

              <ButtonLink
                variant='secondary'
                href={`https://akademik.its.ac.id/lv_peserta.php?mkJur=${
                  matkul?.mkjur
                }&mkID=${
                  matkul?.kode
                }&mkSem=1&mkThn=2021&mkKelas=${kelas.toUpperCase()}`}
              >
                Open Daftar Kelas
              </ButtonLink>
            </div>
          </div>
          <Footer />
        </section>
      </main>
    </>
  );
}

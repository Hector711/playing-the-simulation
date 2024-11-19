/** @format */

'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { countPages } from '@/app/_firebase/_client/posts';

export default function PaginationOutlined() {
  const router = useRouter();
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    async function getTotalPages() {
      const totalPages = await countPages();
      setTotalPages(totalPages);
    }
    getTotalPages();
  }, []);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number,
  ) => {
    if (event) {
      router.push(`/home?page=${page}`);
    }
  };

  return (
    <Stack spacing={4} id='pagination-container'>
      <Pagination
        count={totalPages}
        variant='outlined'
        color='primary'
        onChange={handlePageChange}
      />
    </Stack>
  );
}

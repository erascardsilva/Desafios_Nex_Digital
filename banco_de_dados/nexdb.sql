--
-- PostgreSQL database dump
--

-- Dumped from database version 15.3
-- Dumped by pg_dump version 15.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: erasmo
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO erasmo;

--
-- Name: users; Type: TABLE; Schema: public; Owner: erasmo
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now(),
    "updatedAt" timestamp without time zone
);


ALTER TABLE public.users OWNER TO erasmo;

--
-- Name: usuarios_id_seq; Type: SEQUENCE; Schema: public; Owner: erasmo
--

CREATE SEQUENCE public.usuarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.usuarios_id_seq OWNER TO erasmo;

--
-- Name: usuarios_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: erasmo
--

ALTER SEQUENCE public.usuarios_id_seq OWNED BY public.users.id;


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: erasmo
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.usuarios_id_seq'::regclass);


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: erasmo
--

COPY public."SequelizeMeta" (name) FROM stdin;
20230614194140-create-users-table.js
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: erasmo
--

COPY public.users (id, name, email, password, "createdAt", "updatedAt") FROM stdin;
1	Erasmo	erasmo@vmi-informatica.com.br	$2b$10$R7JtdkGl3Is0TXs6mXtBvO1UpimyZPMm0kzjQz4ogAR5eJCihD5Nu	2023-06-14 19:53:59.142	2023-06-14 19:53:59.142
2	Teste	teste@teste.com	$2b$10$QAnw3kviQm.SoOpqLZLy6.8cSeJ8SV56flLH7EFpjRItiYrsF.AhC	2023-06-14 19:58:45.042	2023-06-14 19:58:45.042
3	Erasmo	teste1@teste.com	$2b$10$f1JRp/2YXsQjH/Pi1cLaIOoO7GCOplWcq1JLIe//N/e0utnASEJ8y	2023-06-14 23:32:53.218	2023-06-14 23:32:53.218
4	Erasmo Cardoso	nex@digital.com	$2b$10$nNVxqvRwytIXP9FQv6//2OuWACtGVFLrsnUNwZtPNtv.NgCAAWvui	2023-06-14 23:45:16.351	2023-06-14 23:45:16.351
5	Zezao	zezao@zezao.com	$2b$10$//oqSxjWWM/jfGMwkCH/YuxeVXS9VjWGrCJ5qcPAtaV/r98rG0gp.	2023-06-15 00:29:39.516	2023-06-15 00:29:39.516
\.


--
-- Name: usuarios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: erasmo
--

SELECT pg_catalog.setval('public.usuarios_id_seq', 5, true);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: erasmo
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: users usuarios_email_key; Type: CONSTRAINT; Schema: public; Owner: erasmo
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT usuarios_email_key UNIQUE (email);


--
-- Name: users usuarios_pkey; Type: CONSTRAINT; Schema: public; Owner: erasmo
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--


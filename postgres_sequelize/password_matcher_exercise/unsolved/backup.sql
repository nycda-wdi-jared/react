--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.1
-- Dumped by pg_dump version 9.6.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: Guestbooks; Type: TABLE; Schema: public; Owner: jaredthomas
--

CREATE TABLE "Guestbooks" (
    id integer NOT NULL,
    name character varying(255),
    message character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE "Guestbooks" OWNER TO jaredthomas;

--
-- Name: Guestbooks_id_seq; Type: SEQUENCE; Schema: public; Owner: jaredthomas
--

CREATE SEQUENCE "Guestbooks_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Guestbooks_id_seq" OWNER TO jaredthomas;

--
-- Name: Guestbooks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jaredthomas
--

ALTER SEQUENCE "Guestbooks_id_seq" OWNED BY "Guestbooks".id;


--
-- Name: Guestbooks id; Type: DEFAULT; Schema: public; Owner: jaredthomas
--

ALTER TABLE ONLY "Guestbooks" ALTER COLUMN id SET DEFAULT nextval('"Guestbooks_id_seq"'::regclass);


--
-- Data for Name: Guestbooks; Type: TABLE DATA; Schema: public; Owner: jaredthomas
--

COPY "Guestbooks" (id, name, message, "createdAt", "updatedAt") FROM stdin;
17	jared	hey hey yo yo yo	2017-12-26 13:47:48.278-05	2018-01-15 22:31:02.31-05
18	Billy	bob	2018-01-15 22:31:12.67-05	2018-01-15 22:31:12.67-05
\.


--
-- Name: Guestbooks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jaredthomas
--

SELECT pg_catalog.setval('"Guestbooks_id_seq"', 18, true);


--
-- Name: Guestbooks Guestbooks_pkey; Type: CONSTRAINT; Schema: public; Owner: jaredthomas
--

ALTER TABLE ONLY "Guestbooks"
    ADD CONSTRAINT "Guestbooks_pkey" PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--


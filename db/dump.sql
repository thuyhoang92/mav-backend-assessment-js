--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4
-- Dumped by pg_dump version 17.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
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
-- Name: products; Type: TABLE; Schema: public; Owner: mav_backend_assessment_js_owner
--

CREATE TABLE public.products (
    id bigint NOT NULL,
    title character varying(255),
    tags text,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    sku character varying(255)
);


ALTER TABLE public.products OWNER TO mav_backend_assessment_js_owner;

--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: mav_backend_assessment_js_owner
--

COPY public.products (id, title, tags, created_at, updated_at, sku) FROM stdin;
49692916384033	The Out of Stock Snowboard Default Title oos-1	Accessory, Sport, Winter	2024-06-28 09:31:01	2024-06-28 09:31:01	oos-1
49692916154657	The Complete Snowboard Dawn comp-2	Premium, Snow, Snowboard, Sport, Winter	2024-06-28 09:31:00	2024-06-28 09:31:00	comp-2
49692916515105	The Inventory Not Tracked Snowboard Default Title sku-untracked-1	Accessory, Sport, Winter	2024-06-28 09:31:01	2024-06-28 09:31:01	sku-untracked-1
49692916351265	The Draft Snowboard Default Title draft-1		2024-06-28 09:31:01	2024-06-28 09:31:01	draft-1
49692916187425	The Complete Snowboard Powder comp-3	Premium, Snow, Snowboard, Sport, Winter	2024-06-28 09:31:00	2024-06-28 09:31:00	comp-3
49692916252961	The Complete Snowboard Sunset comp-5	Premium, Snow, Snowboard, Sport, Winter	2024-06-28 09:31:00	2024-06-28 09:31:00	comp-5
49692916285729	The Hidden Snowboard Default Title hide-2	Premium, Snow, Snowboard, Sport, Winter	2024-06-28 09:31:00	2024-06-28 09:31:00	hide-2
50040694407457	The Compare at Price Snowboard Large lar-2	Accessory, Sport, Winter	2024-07-29 00:14:32	2024-07-29 00:15:08	lar-2
49692916220193	The Complete Snowboard Electric comp-4	Premium, Snow, Snowboard, Sport, Winter	2024-06-28 09:31:00	2024-06-28 09:31:00	comp-4
49692916121889	The Complete Snowboard Ice comp-1	Premium, Snow, Snowboard, Sport, Winter	2024-06-28 09:31:00	2024-06-28 09:31:00	comp-1
\.


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: mav_backend_assessment_js_owner
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- Name: DEFAULT PRIVILEGES FOR SEQUENCES; Type: DEFAULT ACL; Schema: public; Owner: cloud_admin
--

ALTER DEFAULT PRIVILEGES FOR ROLE cloud_admin IN SCHEMA public GRANT ALL ON SEQUENCES TO neon_superuser WITH GRANT OPTION;


--
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: public; Owner: cloud_admin
--

ALTER DEFAULT PRIVILEGES FOR ROLE cloud_admin IN SCHEMA public GRANT ALL ON TABLES TO neon_superuser WITH GRANT OPTION;


--
-- PostgreSQL database dump complete
--


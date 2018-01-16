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
-- Name: Posts; Type: TABLE; Schema: public; Owner: jaredthomas
--

CREATE TABLE "Posts" (
    id integer NOT NULL,
    message character varying(255),
    user_id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE "Posts" OWNER TO jaredthomas;

--
-- Name: Posts_id_seq; Type: SEQUENCE; Schema: public; Owner: jaredthomas
--

CREATE SEQUENCE "Posts_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Posts_id_seq" OWNER TO jaredthomas;

--
-- Name: Posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jaredthomas
--

ALTER SEQUENCE "Posts_id_seq" OWNED BY "Posts".id;


--
-- Name: Profiles; Type: TABLE; Schema: public; Owner: jaredthomas
--

CREATE TABLE "Profiles" (
    id integer NOT NULL,
    fav_veggie character varying(255),
    fav_fruit character varying(255),
    user_id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE "Profiles" OWNER TO jaredthomas;

--
-- Name: Profiles_id_seq; Type: SEQUENCE; Schema: public; Owner: jaredthomas
--

CREATE SEQUENCE "Profiles_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Profiles_id_seq" OWNER TO jaredthomas;

--
-- Name: Profiles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jaredthomas
--

ALTER SEQUENCE "Profiles_id_seq" OWNED BY "Profiles".id;


--
-- Name: Songs; Type: TABLE; Schema: public; Owner: jaredthomas
--

CREATE TABLE "Songs" (
    id integer NOT NULL,
    title character varying(255),
    artist character varying(255),
    lyrics text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE "Songs" OWNER TO jaredthomas;

--
-- Name: Songs_id_seq; Type: SEQUENCE; Schema: public; Owner: jaredthomas
--

CREATE SEQUENCE "Songs_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Songs_id_seq" OWNER TO jaredthomas;

--
-- Name: Songs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jaredthomas
--

ALTER SEQUENCE "Songs_id_seq" OWNED BY "Songs".id;


--
-- Name: UserSongs; Type: TABLE; Schema: public; Owner: jaredthomas
--

CREATE TABLE "UserSongs" (
    id integer NOT NULL,
    user_id integer NOT NULL,
    song_id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE "UserSongs" OWNER TO jaredthomas;

--
-- Name: UserSongs_id_seq; Type: SEQUENCE; Schema: public; Owner: jaredthomas
--

CREATE SEQUENCE "UserSongs_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "UserSongs_id_seq" OWNER TO jaredthomas;

--
-- Name: UserSongs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jaredthomas
--

ALTER SEQUENCE "UserSongs_id_seq" OWNED BY "UserSongs".id;


--
-- Name: Users; Type: TABLE; Schema: public; Owner: jaredthomas
--

CREATE TABLE "Users" (
    id integer NOT NULL,
    name character varying(255),
    username character varying(255),
    password character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE "Users" OWNER TO jaredthomas;

--
-- Name: Users_id_seq; Type: SEQUENCE; Schema: public; Owner: jaredthomas
--

CREATE SEQUENCE "Users_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Users_id_seq" OWNER TO jaredthomas;

--
-- Name: Users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jaredthomas
--

ALTER SEQUENCE "Users_id_seq" OWNED BY "Users".id;


--
-- Name: Posts id; Type: DEFAULT; Schema: public; Owner: jaredthomas
--

ALTER TABLE ONLY "Posts" ALTER COLUMN id SET DEFAULT nextval('"Posts_id_seq"'::regclass);


--
-- Name: Profiles id; Type: DEFAULT; Schema: public; Owner: jaredthomas
--

ALTER TABLE ONLY "Profiles" ALTER COLUMN id SET DEFAULT nextval('"Profiles_id_seq"'::regclass);


--
-- Name: Songs id; Type: DEFAULT; Schema: public; Owner: jaredthomas
--

ALTER TABLE ONLY "Songs" ALTER COLUMN id SET DEFAULT nextval('"Songs_id_seq"'::regclass);


--
-- Name: UserSongs id; Type: DEFAULT; Schema: public; Owner: jaredthomas
--

ALTER TABLE ONLY "UserSongs" ALTER COLUMN id SET DEFAULT nextval('"UserSongs_id_seq"'::regclass);


--
-- Name: Users id; Type: DEFAULT; Schema: public; Owner: jaredthomas
--

ALTER TABLE ONLY "Users" ALTER COLUMN id SET DEFAULT nextval('"Users_id_seq"'::regclass);


--
-- Data for Name: Posts; Type: TABLE DATA; Schema: public; Owner: jaredthomas
--

COPY "Posts" (id, message, user_id, "createdAt", "updatedAt") FROM stdin;
1	yo	1	2017-12-10 00:04:42.445-05	2017-12-10 00:04:42.445-05
2	you	1	2017-12-10 00:04:43.599-05	2017-12-10 00:04:43.599-05
\.


--
-- Name: Posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jaredthomas
--

SELECT pg_catalog.setval('"Posts_id_seq"', 2, true);


--
-- Data for Name: Profiles; Type: TABLE DATA; Schema: public; Owner: jaredthomas
--

COPY "Profiles" (id, fav_veggie, fav_fruit, user_id, "createdAt", "updatedAt") FROM stdin;
1	broccoli	pineapple	1	2017-12-09 13:10:53.518-05	2017-12-09 13:10:53.518-05
2	brussel sprouts	mango	2	2017-12-09 13:10:54.799-05	2017-12-09 13:10:54.799-05
\.


--
-- Name: Profiles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jaredthomas
--

SELECT pg_catalog.setval('"Profiles_id_seq"', 6, true);


--
-- Data for Name: Songs; Type: TABLE DATA; Schema: public; Owner: jaredthomas
--

COPY "Songs" (id, title, artist, lyrics, "createdAt", "updatedAt") FROM stdin;
1	Break Stuff	Limp Bizkit	Its just one of those days\nWhere you don't want to wake up\nEverything is fucked\nEverybody sucks\nYou don't really know why\nBut you want to justify\nRippin' someone's head off\nNo human contact\nAnd if you interact\nYour life is on contract\nYour best bet is to stay away motherfucker\nIt's just one of those days\nIt's all about the he-says, she-says bullshit\nI think you better quit, let the shit slip\nOr you'll be leaving with a fat lip\nIt's all about the he-says, she-says bullshit\nI think you better quit, talking that shit\nIts just one of those days\nFeeling like a freight train\nFirst one to complain\nLeaves with a bloodstain\nDamn right I'm a maniac\nYou better watch your back\nCause I'm fucking up your program\nAnd then your stuck up\nYou just lucked up\nNext in line to get fucked up\nYour best bet is to stay away motherfucker\nIt's just one of those days\nIt's all about the he-says, she-says bullshit\nI think you better quit, let the shit slip\nOr you'll be leaving with a fat lip\nIt's all about the he-says, she-says bullshit\nI think you better quit, talking that shit\nPunk, so come and get it\nI feel like shit\nMy suggestion, is to keep your distance\nCause right now I'm dangerous\nWe've all felt like shit\nAnd been treated like shit\nAll those motherfuckers\nThat want to step up\nI hope you know, I pack a chainsaw\nI'll skin your ass raw\nAnd if my day keeps going this way, I just might\nBreak something tonight\nI pack a chainsaw\nI'll skin your ass raw\nAnd if my day keeps going this way, I just might\nBreak something tonight\nI pack a chainsaw\nI'll skin your ass raw\nAnd if my day keeps going this way, I just might\nBreak your fucking face tonight\nGive me something to break\nJust give me something to break\nHow bout yer fucking face\nI hope you know, I pack a chainsaw\nWhat!\nA chainsaw\nWhat!\nA motherfucking chainsaw\nWhat!\nSo come and get it\nIt's all about the he-says, she-says bullshit\nI think you better quit, let the shit slip\nOr you'll be leaving with a fat lip\nIt's all about the he-says, she-says bullshit\nI think you better quit, talking that shit\nPunk, so come and get it	2017-12-09 13:07:16.271-05	2017-12-09 13:07:16.271-05
2	Reelin' in the years	Steely Dan	Your everlasting summer \nYou can see it fading fast \nSo you grab a piece of something \nThat you think is gonna last \nBut you wouldn't know a diamond \nIf you held it in your hand \nThe things you think are precious \nI can't understand \n\nAre you reelin' in the years \nStowin' away the time \nAre you gatherin' up the tears \nHave you had enough of mine \n\nAre you reelin' in the years \nStowin' away the time \nAre you gatherin' up the tears \nHave you had enough of mine \n\nYou been tellin' me you're a genius \nSince you were seventeen \nIn all the time I've known you \nI still don't know what you mean \nThe weekend at the college \nDidn't turn out like you planned \nThe things that pass for knowledge \nI can't understand \n\nAre you reelin' in the years \nStowin' away the time \nAre you gatherin' up the tears \nHave you had enough of mine \n\nAre you reelin' in the years \nStowin' away the time \nAre you gatherin' up the tears \nHave you had enough of mine \n\nI spend a lot of money \nAnd I spent a lot of time \nThe trip we made in Hollywood \nIs etched upon my mind \nAfter all the things we've done and seen \nYou find another man \nThe things you think are useless \nI can't understand \n\nAre you reelin' in the years \nStowin' away the time \nAre you gatherin' up the tears \nHave you had enough of mine \n\nAre you reelin' in the years \nStowin' away the time \nAre you gatherin' up the tears \nHave you had enough of mine	2017-12-09 13:07:17.933-05	2017-12-09 13:07:17.933-05
3	Rock On	David Essex	Hey, kid, rock and roll\nRock on, ooh my soul\nHey, kids, you boogey, too, did ya?\nHey shout, summertime blues\nJump up and down in my blue suede shoes\nHey, did you rock and roll, rock on\nAnd where do we go from here?\nWhich is a way that's clear\nStill looking for that blue jean, baby queen\nPrettiest girl I ever seen\nSee her shake on the movie screen, Jimmy Dean\n(James Dean)\nAnd where do we go from here?\nWhich is a way that's clear\nStill looking for that blue jean, baby queen\nPrettiest girl I ever seen\nSee her shake on the movie screen, Jimmy Dean\n(Jimmy Dean)\nRock on\nRock on\nRock on (hey, kid, rock and roll)\nRock on\nRock on (hey, kid, rock and roll)\nRock on\nRock on (hey, kid, rock and roll)\nRock on\nRock on (hey, kid, rock and roll)\nRock on\nRock on (hey, kid, rock and roll)\nRock on\nRock on (hey, kid, rock and roll)\nRock on\nRock on (hey, kid, rock and roll)\nRock on	2017-12-09 13:07:46.864-05	2017-12-09 13:07:46.864-05
4	Send the Pain Below	Chevelle	I liked,\nHaving hurt,\nSo send the pain below,\nWhere I need it.\nYou used to beg me,\nTo take,\nCare of things,\nAnd smile at the thoughts,\nOf me failing.\nBut long before,\nHaving hurt,\nI'll send the pain below,\nI'll send the pain below.\nMuch like suffocating,\nMuch like suffocating,\nMuch like suffocating (I'll send the pain below)\nMuch like suffocating (I'll send the pain below).\nYou used run me away,\nAll while laughing,\nThen cry about that fact,\nTil my returns.\nBut long before,\nHaving hurt,\nI'll send the pain below,\nI'll send the pain below.\nMuch like suffocating,\nMuch like suffocating,\nMuch like suffocating (I'll send the pain below)\nMuch like suffocating (I'll send the pain below)\nMuch like suffocating\nI can't feel my chest (chest, chest),\nAnymore,\nDrop down,\n'Cause I'm in\nI can't feel my chest (chest, chest)\nDrop down!\nI liked,\nHaving hurt,\nSo send the pain below,\nSo send the pain below (Much like suffocating) (I liked),\nSo send the pain below (Much like suffocating) (Having hurt)\nSo send the pain below (Much like suffocating)\nSo send the pain below (Much like suffocating)\nSo send the pain below	2017-12-09 13:07:48.042-05	2017-12-09 13:07:48.042-05
\.


--
-- Name: Songs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jaredthomas
--

SELECT pg_catalog.setval('"Songs_id_seq"', 4, true);


--
-- Data for Name: UserSongs; Type: TABLE DATA; Schema: public; Owner: jaredthomas
--

COPY "UserSongs" (id, user_id, song_id, "createdAt", "updatedAt") FROM stdin;
1	1	1	2017-12-09 13:08:48.187-05	2017-12-09 13:08:48.187-05
2	1	3	2017-12-09 13:08:49.472-05	2017-12-09 13:08:49.472-05
3	2	2	2017-12-09 13:09:16.391-05	2017-12-09 13:09:16.391-05
4	2	4	2017-12-09 13:09:17.625-05	2017-12-09 13:09:17.625-05
\.


--
-- Name: UserSongs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jaredthomas
--

SELECT pg_catalog.setval('"UserSongs_id_seq"', 4, true);


--
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: jaredthomas
--

COPY "Users" (id, name, username, password, "createdAt", "updatedAt") FROM stdin;
1	Jared	jjthom87	abcd	2017-12-09 13:06:13.299-05	2017-12-09 13:06:13.299-05
2	Joey	joeybags	abcd	2017-12-09 13:06:14.583-05	2017-12-09 13:06:14.583-05
\.


--
-- Name: Users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jaredthomas
--

SELECT pg_catalog.setval('"Users_id_seq"', 2, true);


--
-- Name: Posts Posts_pkey; Type: CONSTRAINT; Schema: public; Owner: jaredthomas
--

ALTER TABLE ONLY "Posts"
    ADD CONSTRAINT "Posts_pkey" PRIMARY KEY (id);


--
-- Name: Profiles Profiles_pkey; Type: CONSTRAINT; Schema: public; Owner: jaredthomas
--

ALTER TABLE ONLY "Profiles"
    ADD CONSTRAINT "Profiles_pkey" PRIMARY KEY (id);


--
-- Name: Profiles Profiles_user_id_key; Type: CONSTRAINT; Schema: public; Owner: jaredthomas
--

ALTER TABLE ONLY "Profiles"
    ADD CONSTRAINT "Profiles_user_id_key" UNIQUE (user_id);


--
-- Name: Songs Songs_pkey; Type: CONSTRAINT; Schema: public; Owner: jaredthomas
--

ALTER TABLE ONLY "Songs"
    ADD CONSTRAINT "Songs_pkey" PRIMARY KEY (id);


--
-- Name: UserSongs UserSongs_pkey; Type: CONSTRAINT; Schema: public; Owner: jaredthomas
--

ALTER TABLE ONLY "UserSongs"
    ADD CONSTRAINT "UserSongs_pkey" PRIMARY KEY (id);


--
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: jaredthomas
--

ALTER TABLE ONLY "Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


--
-- Name: Posts Posts_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: jaredthomas
--

ALTER TABLE ONLY "Posts"
    ADD CONSTRAINT "Posts_user_id_fkey" FOREIGN KEY (user_id) REFERENCES "Users"(id);


--
-- Name: Profiles Profiles_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: jaredthomas
--

ALTER TABLE ONLY "Profiles"
    ADD CONSTRAINT "Profiles_user_id_fkey" FOREIGN KEY (user_id) REFERENCES "Users"(id);


--
-- Name: UserSongs UserSongs_song_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: jaredthomas
--

ALTER TABLE ONLY "UserSongs"
    ADD CONSTRAINT "UserSongs_song_id_fkey" FOREIGN KEY (song_id) REFERENCES "Songs"(id);


--
-- Name: UserSongs UserSongs_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: jaredthomas
--

ALTER TABLE ONLY "UserSongs"
    ADD CONSTRAINT "UserSongs_user_id_fkey" FOREIGN KEY (user_id) REFERENCES "Users"(id);


--
-- PostgreSQL database dump complete
--


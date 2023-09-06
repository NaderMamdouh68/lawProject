-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 06, 2023 at 06:09 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `libraryprojectsystem`
--

-- --------------------------------------------------------

--
-- Table structure for table `best_message_service`
--

CREATE TABLE `best_message_service` (
  `id` int(11) NOT NULL,
  `photo_college_letter` varchar(255) NOT NULL,
  `research_number` tinyint(1) NOT NULL,
  `photo_payment_receipt` varchar(255) DEFAULT NULL,
  `research1_image_pdf` varchar(255) DEFAULT NULL,
  `research1_image_word` varchar(255) DEFAULT NULL,
  `research2_image_pdf` varchar(255) DEFAULT NULL,
  `research2_image_word` varchar(255) DEFAULT NULL,
  `research3_image_pdf` varchar(255) DEFAULT NULL,
  `research3_image_word` varchar(255) DEFAULT NULL,
  `research4_image_pdf` varchar(255) DEFAULT NULL,
  `research4_image_word` varchar(255) DEFAULT NULL,
  `research5_image_pdf` varchar(255) DEFAULT NULL,
  `research5_image_word` varchar(255) DEFAULT NULL,
  `research6_image_pdf` varchar(255) DEFAULT NULL,
  `research6_image_word` varchar(255) DEFAULT NULL,
  `research7_image_pdf` varchar(255) DEFAULT NULL,
  `research7_image_word` varchar(255) DEFAULT NULL,
  `research8_image_pdf` varchar(255) DEFAULT NULL,
  `research8_image_word` varchar(255) DEFAULT NULL,
  `research9_image_pdf` varchar(255) DEFAULT NULL,
  `research9_image_word` varchar(255) DEFAULT NULL,
  `research10_image_pdf` varchar(255) DEFAULT NULL,
  `research10_image_word` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `best_message_service`
--

INSERT INTO `best_message_service` (`id`, `photo_college_letter`, `research_number`, `photo_payment_receipt`, `research1_image_pdf`, `research1_image_word`, `research2_image_pdf`, `research2_image_word`, `research3_image_pdf`, `research3_image_word`, `research4_image_pdf`, `research4_image_word`, `research5_image_pdf`, `research5_image_word`, `research6_image_pdf`, `research6_image_word`, `research7_image_pdf`, `research7_image_word`, `research8_image_pdf`, `research8_image_word`, `research9_image_pdf`, `research9_image_word`, `research10_image_pdf`, `research10_image_word`) VALUES
(4, '10_1693661117257.jpg', 0, '10_1693661192594.png', '10_1693661192599.pdf', '10_1693661192595.docx', '10_1693661192601.pdf', '10_1693661192597.docx', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `formation_service`
--

CREATE TABLE `formation_service` (
  `id` int(11) NOT NULL,
  `level` tinyint(1) NOT NULL,
  `photo_payment_receipt` varchar(255) DEFAULT NULL,
  `photo_college_letter` varchar(255) NOT NULL,
  `message_word_ar` varchar(255) DEFAULT NULL,
  `message_pdf_ar` varchar(255) DEFAULT NULL,
  `message_word_en` varchar(255) DEFAULT NULL,
  `message_pdf_en` varchar(255) DEFAULT NULL,
  `quote_check_form` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `formation_service`
--

INSERT INTO `formation_service` (`id`, `level`, `photo_payment_receipt`, `photo_college_letter`, `message_word_ar`, `message_pdf_ar`, `message_word_en`, `message_pdf_en`, `quote_check_form`) VALUES
(7, 1, '10_1693577242299.jpg', '10_1693577145225.pdf', '10_1693577242302.docx', '10_1693577285424.pdf', NULL, NULL, '10_1693577242302.pdf');

-- --------------------------------------------------------

--
-- Table structure for table `grant_service`
--

CREATE TABLE `grant_service` (
  `id` int(11) NOT NULL,
  `message_pdf_en` varchar(255) NOT NULL,
  `message_word_en` varchar(255) NOT NULL,
  `message_pdf_ar` varchar(255) NOT NULL,
  `message_word_ar` varchar(255) NOT NULL,
  `decision` varchar(255) NOT NULL,
  `level` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `grant_service`
--

INSERT INTO `grant_service` (`id`, `message_pdf_en`, `message_word_en`, `message_pdf_ar`, `message_word_ar`, `decision`, `level`) VALUES
(3, '', '', '10_1693669246101.pdf', '10_1693669251022.docx', '10_1693669244455.pdf', 0),
(4, '', '', '10_1693673724472.pdf', '10_1693669504811.docx', '10_1693669504796.pdf', 1);

-- --------------------------------------------------------

--
-- Table structure for table `knowledge_bank_service`
--

CREATE TABLE `knowledge_bank_service` (
  `id` int(11) NOT NULL,
  `subscription_status` tinyint(1) DEFAULT NULL COMMENT 'حاله الاشتراك \r\nمش مشترك =0\r\nتفعيل =1\r\nافاده او اثبات انه مشترك =2',
  `proof_of_subscription` varchar(255) DEFAULT NULL,
  `level` int(11) DEFAULT NULL,
  `academic` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `knowledge_bank_service`
--

INSERT INTO `knowledge_bank_service` (`id`, `subscription_status`, `proof_of_subscription`, `level`, `academic`) VALUES
(6, NULL, NULL, 0, 'evwefwevew');

-- --------------------------------------------------------

--
-- Table structure for table `magazine_checking_service`
--

CREATE TABLE `magazine_checking_service` (
  `id` int(11) NOT NULL,
  `photo_college_letter` varchar(255) NOT NULL,
  `photo_payment_receipt` varchar(255) DEFAULT NULL,
  `research1_image_pdf` varchar(255) DEFAULT NULL,
  `research1_image_word` varchar(255) DEFAULT NULL,
  `research2_image_pdf` varchar(255) DEFAULT NULL,
  `research2_image_word` varchar(255) DEFAULT NULL,
  `research3_image_pdf` varchar(255) DEFAULT NULL,
  `research3_image_word` varchar(255) DEFAULT NULL,
  `research4_image_pdf` varchar(255) DEFAULT NULL,
  `research4_image_word` varchar(255) DEFAULT NULL,
  `research5_image_pdf` varchar(255) DEFAULT NULL,
  `research5_image_word` varchar(255) DEFAULT NULL,
  `research6_image_pdf` varchar(255) DEFAULT NULL,
  `research6_image_word` varchar(255) DEFAULT NULL,
  `research7_image_pdf` varchar(255) DEFAULT NULL,
  `research7_image_word` varchar(255) DEFAULT NULL,
  `research8_image_pdf` varchar(255) DEFAULT NULL,
  `research8_image_word` varchar(255) DEFAULT NULL,
  `research9_image_pdf` varchar(255) DEFAULT NULL,
  `research9_image_word` varchar(255) DEFAULT NULL,
  `research10_image_pdf` varchar(255) DEFAULT NULL,
  `research10_image_word` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `magazine_checking_service`
--

INSERT INTO `magazine_checking_service` (`id`, `photo_college_letter`, `photo_payment_receipt`, `research1_image_pdf`, `research1_image_word`, `research2_image_pdf`, `research2_image_word`, `research3_image_pdf`, `research3_image_word`, `research4_image_pdf`, `research4_image_word`, `research5_image_pdf`, `research5_image_word`, `research6_image_pdf`, `research6_image_word`, `research7_image_pdf`, `research7_image_word`, `research8_image_pdf`, `research8_image_word`, `research9_image_pdf`, `research9_image_word`, `research10_image_pdf`, `research10_image_word`) VALUES
(5, '10_1693659835832.png', '10_1693659919933.jpg', '10_1693659919940.pdf', '10_1693660256082.doc', '10_1693659919942.pdf', '10_1693659919939.docx', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `manager`
--

CREATE TABLE `manager` (
  `id` int(11) NOT NULL,
  `mname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `service_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `manager`
--

INSERT INTO `manager` (`id`, `mname`, `email`, `password`, `service_id`) VALUES
(2, 'micheal', 'michael@info.com', '$2b$10$eItknlVFspntipdZgd/WZOH/bK3c6ml1wff8VJ5MVPfXzqJYMfBuO', 1),
(3, 'nader', 'nader@info.com', '$2b$10$eItknlVFspntipdZgd/WZOH/bK3c6ml1wff8VJ5MVPfXzqJYMfBuO', 2),
(4, 'mm', 'mm@info.com', '$2b$10$eItknlVFspntipdZgd/WZOH/bK3c6ml1wff8VJ5MVPfXzqJYMfBuO', 3),
(5, 'nn', 'nn@info.com', '$2b$10$eItknlVFspntipdZgd/WZOH/bK3c6ml1wff8VJ5MVPfXzqJYMfBuO', 4),
(6, 'bb', 'bb@info.com', '$2b$10$eItknlVFspntipdZgd/WZOH/bK3c6ml1wff8VJ5MVPfXzqJYMfBuO', 5),
(7, 'vv', 'vv@info.com', '$2b$10$eItknlVFspntipdZgd/WZOH/bK3c6ml1wff8VJ5MVPfXzqJYMfBuO', 6),
(8, 'cc', 'cc@info.com', '$2b$10$eItknlVFspntipdZgd/WZOH/bK3c6ml1wff8VJ5MVPfXzqJYMfBuO', 7),
(9, 'zz', 'zz@info.com', '$2b$10$eItknlVFspntipdZgd/WZOH/bK3c6ml1wff8VJ5MVPfXzqJYMfBuO', 8),
(10, 'ff', 'ff@info.com', '$2b$10$eItknlVFspntipdZgd/WZOH/bK3c6ml1wff8VJ5MVPfXzqJYMfBuO', 9);

-- --------------------------------------------------------

--
-- Table structure for table `personal_examination_service`
--

CREATE TABLE `personal_examination_service` (
  `id` int(11) NOT NULL,
  `photo_college_letter` varchar(255) DEFAULT NULL,
  `photo_payment_receipt` varchar(255) DEFAULT NULL,
  `accept_date` date DEFAULT NULL,
  `publish_date` date DEFAULT NULL,
  `research1_image_pdf` varchar(255) DEFAULT NULL,
  `research1_image_word` varchar(255) DEFAULT NULL,
  `research2_image_pdf` varchar(255) DEFAULT NULL,
  `research2_image_word` varchar(255) DEFAULT NULL,
  `research3_image_pdf` varchar(255) DEFAULT NULL,
  `research3_image_word` varchar(255) DEFAULT NULL,
  `research4_image_pdf` varchar(255) DEFAULT NULL,
  `research4_image_word` varchar(255) DEFAULT NULL,
  `research5_image_pdf` varchar(255) DEFAULT NULL,
  `research5_image_word` varchar(255) DEFAULT NULL,
  `research6_image_pdf` varchar(255) DEFAULT NULL,
  `research6_image_word` varchar(255) DEFAULT NULL,
  `research7_image_pdf` varchar(255) DEFAULT NULL,
  `research7_image_word` varchar(255) DEFAULT NULL,
  `research8_image_pdf` varchar(255) DEFAULT NULL,
  `research8_image_word` varchar(255) DEFAULT NULL,
  `research9_image_pdf` varchar(255) DEFAULT NULL,
  `research9_image_word` varchar(255) DEFAULT NULL,
  `research10_image_pdf` varchar(255) DEFAULT NULL,
  `research10_image_word` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `personal_examination_service`
--

INSERT INTO `personal_examination_service` (`id`, `photo_college_letter`, `photo_payment_receipt`, `accept_date`, `publish_date`, `research1_image_pdf`, `research1_image_word`, `research2_image_pdf`, `research2_image_word`, `research3_image_pdf`, `research3_image_word`, `research4_image_pdf`, `research4_image_word`, `research5_image_pdf`, `research5_image_word`, `research6_image_pdf`, `research6_image_word`, `research7_image_pdf`, `research7_image_word`, `research8_image_pdf`, `research8_image_word`, `research9_image_pdf`, `research9_image_word`, `research10_image_pdf`, `research10_image_word`) VALUES
(7, '10_1693654704676.png', '10_1693655063129.png', '2023-09-15', '2023-09-05', '10_1693655068389.pdf', '10_1693655066099.doc', '10_1693655070368.pdf', '10_1693655066770.docx', '10_1693655071986.pdf', '10_1693655067063.docx', '10_1693655073960.pdf', '10_1693655067391.docx', '10_1693655075919.pdf', '10_1693655068061.docx', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `registration_services`
--

CREATE TABLE `registration_services` (
  `id` int(11) NOT NULL,
  `level` tinyint(1) NOT NULL,
  `photo_payment_receipt` varchar(255) DEFAULT NULL,
  `photo_college_letter` varchar(255) NOT NULL,
  `research_plan_ar_pdf` varchar(255) DEFAULT NULL,
  `research_plan_ar_word` varchar(255) DEFAULT NULL,
  `research_plan_en_pdf` varchar(255) DEFAULT NULL,
  `research_plan_en_word` varchar(255) DEFAULT NULL,
  `translation_paper` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `registration_services`
--

INSERT INTO `registration_services` (`id`, `level`, `photo_payment_receipt`, `photo_college_letter`, `research_plan_ar_pdf`, `research_plan_ar_word`, `research_plan_en_pdf`, `research_plan_en_word`, `translation_paper`) VALUES
(20, 0, '10_1693576871975.jpg', '10_1693576790107.jpg', '10_1693576969390.pdf', '10_1693576871986.docx', '10_1693581857712.pdf', '10_1693581857735.docx', '10_1693576871987.jpg'),
(21, 0, '10_1693927133210.jpg', '10_1693927035324.png', '10_1693927133213.pdf', '10_1693927133238.docx', '10_1693927133215.pdf', '10_1693927133239.docx', '10_1693927133240.pdf');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` int(11) NOT NULL,
  `service_name` varchar(255) NOT NULL,
  `service_name_ar` varchar(255) NOT NULL,
  `pref` varchar(255) NOT NULL,
  `pref_ar` varchar(255) NOT NULL,
  `enabled` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `service_name`, `service_name_ar`, `pref`, `pref_ar`, `enabled`) VALUES
(1, 'Extracting a statement that the title of the thesis plan is not previously registered', 'استخراج افادة بأن عنوان مخطط الرسالة ليس مسجل', 'Procedures for applying for issuance of statements with titles of academic plans (scientific theses under study) for the purpose of registration for master\'s and doctoral degrees for postgraduate students', 'اجراءات التقدم لإستخراج افادات بعناوين المخططات العلمية (الرسائل العلمية قيد الدراسة) بغرض التسجيل لدرجة الماجستير والدكتوراه لطلاب الدراسات العليا', 1),
(2, 'Examination of citation of scientific theses for the purpose of formation', 'فحص الاقتباس من الرسائل العلمية لغرض التشكيل', 'Procedures for applying for examining academic theses (Master\'s and PhD) for the purpose of formation and discussion for postgraduate students', 'اجراءات التقدم لفحص الرسائل العلمية (الماجستير والدكتوراه)  بغرض التشكيل و المناقشة  لطلاب الدراسات العليا', 1),
(3, 'Examination of scientific production for the purpose of personal examination', 'فحص الانتاج العلمي لغرض الفحص الشخصى', 'Examination of scientific production for the purpose of personal examination', 'فحص الانتاج العلمي لغرض الفحص الشخصى', 1),
(4, 'Examination of scientific research for the purpose of publication in scientific journals', 'فحص الابحاث العلمية بغرض النشر فى المجلات العلمية', 'Procedures for applying to examine scientific research for the purpose of publishing in scientific journals for faculty members and postgraduate students', 'اجراءات التقدم لفحص الابحاث العلمية بغرض النشر فى المجلات العلمية للسادة اعضاء هيئة التدريس وطلاب الدراسات العليا', 1),
(5, 'Examination of scientific research for the purpose of promotion', 'فحص الابحاث العلمية لغرض الترقية', 'Procedures for applying at Helwan University to examine scientific research for the purpose of promotion for faculty members', ' اجراءات التقدم بجامعة حلوان  لفحص الابحاث العلمية بغرض الترقية للسادة اعضاء هيئة التدريس', 1),
(6, 'Examination of the best scientific thesis', 'فحص احسن رساله علميه', 'Procedures for applying to examine scientific production for the purpose of applying for the best thesis competition', 'اجراءات التقدم لفحص الانتاج العلمي بغرض التقدم لمسابقة افضل رسالة', 1),
(7, 'Grant service', 'خدمة المنح', 'Procedures for submitting an electronic copy of theses (Master\'s and PhD) after discussion', 'اجراءات تسليم نسخة الكترونية من الرسائل العلمية (الماجستير والدكتوراه) بعد المناقشة', 1),
(8, 'Knowledge bank service', 'خدمة بنك المعرفة', 'Egyptian Knowledge Bank service', ' خدمة بنك المعرفة المصري', 1),
(9, 'Payment code', 'كود الدفع', '..', '..', 0);

-- --------------------------------------------------------

--
-- Table structure for table `submit`
--

CREATE TABLE `submit` (
  `id` int(11) NOT NULL,
  `ser_reg` int(11) DEFAULT NULL,
  `ser_formation` int(11) DEFAULT NULL,
  `ser_grant` int(11) DEFAULT NULL,
  `ser_personal` int(11) DEFAULT NULL,
  `ser_upgrade` int(11) DEFAULT NULL,
  `ser_knowledge` int(11) DEFAULT NULL,
  `ser_magazine` int(11) DEFAULT NULL,
  `ser_best` int(11) DEFAULT NULL,
  `payment_code` int(11) DEFAULT NULL,
  `status` int(11) NOT NULL COMMENT '0 => req code\r\n1 => sent code\r\n2 => req steptwo\r\n3 => edit step two\r\n4 => edit req code att\r\n5 => acc\r\n6 => reg',
  `files_numbers` int(11) DEFAULT NULL,
  `response_text` varchar(255) DEFAULT NULL,
  `response_pdf` varchar(255) DEFAULT NULL,
  `req_code_date` date DEFAULT NULL,
  `submit_date` date DEFAULT NULL,
  `edit_date` date DEFAULT NULL,
  `response_date` date DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `service_id` int(11) NOT NULL,
  `role` tinyint(1) DEFAULT NULL,
  `manager_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `submit`
--

INSERT INTO `submit` (`id`, `ser_reg`, `ser_formation`, `ser_grant`, `ser_personal`, `ser_upgrade`, `ser_knowledge`, `ser_magazine`, `ser_best`, `payment_code`, `status`, `files_numbers`, `response_text`, `response_pdf`, `req_code_date`, `submit_date`, `edit_date`, `response_date`, `user_id`, `service_id`, `role`, `manager_id`) VALUES
(32, 20, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1212121212, 2, NULL, 'استخراج افادة بأن عنوان مخطط الرسالة ليس مسجل	', '10_1693576871975.jpg', '2023-09-01', '2023-09-01', '2023-09-01', '2023-09-05', 3, 1, NULL, NULL),
(33, NULL, 7, NULL, NULL, NULL, NULL, NULL, NULL, 312312345, 2, NULL, 'vsdsdvsdvs', '10_1693576871975.jpg', '2023-09-01', '2023-09-01', '2023-09-01', '2023-09-03', 3, 2, NULL, NULL),
(34, NULL, NULL, NULL, 7, NULL, NULL, NULL, NULL, NULL, 2, 5, 'bfdbdfbdfbfdb', '10_1693576871975.jpg', '2023-09-02', '2023-09-02', '2023-09-02', '2023-09-05', 3, 3, NULL, NULL),
(35, NULL, NULL, NULL, NULL, NULL, NULL, 5, NULL, 4343453, 2, 2, 'dfbfdbfd', '10_1693576871975.jpg', '2023-09-02', '2023-09-02', '2023-09-02', NULL, 3, 4, NULL, NULL),
(36, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 4, 53453, 0, 2, 'dfnfdndf', '10_1693576871975.jpg', '2023-09-02', '2023-09-02', '2023-09-02', NULL, 3, 6, NULL, NULL),
(37, NULL, NULL, NULL, NULL, 4, NULL, NULL, NULL, 55343453, 2, 2, 'خطاب قبول البحث الاول في حاله ان البحث لم ينشر بعد\nخطاب قبول البحث الاول في حاله ان البحث لم ينشر بعد\nخطاب قبول البحث الاول في حاله ان البحث لم ينشر بعد\nخطاب قبول البحث الاول في حاله ان البحث لم ينشر بعد\nخطاب قبول البحث الاول في حاله ان البحث لم ينشر بعد\n', '10_1693576871975.jpg', '2023-09-02', '2023-09-02', '2023-09-02', NULL, 3, 5, NULL, NULL),
(39, NULL, NULL, 4, NULL, NULL, NULL, NULL, NULL, NULL, 2, NULL, NULL, NULL, NULL, '2023-09-02', '2023-09-02', NULL, 3, 7, NULL, NULL),
(40, NULL, NULL, NULL, NULL, NULL, 6, NULL, NULL, NULL, 2, NULL, NULL, NULL, NULL, '2023-09-02', '2023-09-02', NULL, 3, 8, NULL, NULL),
(41, 21, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 453453, 2, NULL, NULL, NULL, '2023-09-05', '2023-09-05', NULL, NULL, 3, 1, 2, 3);

-- --------------------------------------------------------

--
-- Table structure for table `sub_manager`
--

CREATE TABLE `sub_manager` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sub_manager`
--

INSERT INTO `sub_manager` (`id`, `name`, `email`, `password`) VALUES
(1, 'fff', 'ffff', 'fff');

-- --------------------------------------------------------

--
-- Table structure for table `upgrade_service`
--

CREATE TABLE `upgrade_service` (
  `id` int(11) NOT NULL,
  `research_list` varchar(255) DEFAULT NULL,
  `photo_college_letter` varchar(255) NOT NULL,
  `photo_payment_receipt` varchar(255) DEFAULT NULL,
  `research1_image_pdf` varchar(255) DEFAULT NULL,
  `research1_image_word` varchar(255) DEFAULT NULL,
  `research2_image_pdf` varchar(255) DEFAULT NULL,
  `research2_image_word` varchar(255) DEFAULT NULL,
  `research3_image_pdf` varchar(255) DEFAULT NULL,
  `research3_image_word` varchar(255) DEFAULT NULL,
  `research4_image_pdf` varchar(255) DEFAULT NULL,
  `research4_image_word` varchar(255) DEFAULT NULL,
  `research5_image_pdf` varchar(255) DEFAULT NULL,
  `research5_image_word` varchar(255) DEFAULT NULL,
  `research6_image_pdf` varchar(255) DEFAULT NULL,
  `research6_image_word` varchar(255) DEFAULT NULL,
  `research7_image_pdf` varchar(255) DEFAULT NULL,
  `research7_image_word` varchar(255) DEFAULT NULL,
  `research8_image_pdf` varchar(255) DEFAULT NULL,
  `research8_image_word` varchar(255) DEFAULT NULL,
  `research9_image_pdf` varchar(255) DEFAULT NULL,
  `research9_image_word` varchar(255) DEFAULT NULL,
  `research10_image_pdf` varchar(255) DEFAULT NULL,
  `research10_image_word` varchar(255) DEFAULT NULL,
  `acceptance_letter1` varchar(255) DEFAULT NULL,
  `acceptance_letter2` varchar(255) DEFAULT NULL,
  `acceptance_letter3` varchar(255) DEFAULT NULL,
  `acceptance_letter4` varchar(255) DEFAULT NULL,
  `acceptance_letter5` varchar(255) DEFAULT NULL,
  `acceptance_letter6` varchar(255) DEFAULT NULL,
  `acceptance_letter7` varchar(255) DEFAULT NULL,
  `acceptance_letter8` varchar(255) DEFAULT NULL,
  `acceptance_letter9` varchar(255) DEFAULT NULL,
  `acceptance_letter10` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `upgrade_service`
--

INSERT INTO `upgrade_service` (`id`, `research_list`, `photo_college_letter`, `photo_payment_receipt`, `research1_image_pdf`, `research1_image_word`, `research2_image_pdf`, `research2_image_word`, `research3_image_pdf`, `research3_image_word`, `research4_image_pdf`, `research4_image_word`, `research5_image_pdf`, `research5_image_word`, `research6_image_pdf`, `research6_image_word`, `research7_image_pdf`, `research7_image_word`, `research8_image_pdf`, `research8_image_word`, `research9_image_pdf`, `research9_image_word`, `research10_image_pdf`, `research10_image_word`, `acceptance_letter1`, `acceptance_letter2`, `acceptance_letter3`, `acceptance_letter4`, `acceptance_letter5`, `acceptance_letter6`, `acceptance_letter7`, `acceptance_letter8`, `acceptance_letter9`, `acceptance_letter10`) VALUES
(4, '10_1693665343676.docx', '10_1693661286773.jpg', '10_1693665343669.png', '10_1693665343686.pdf', '10_1693667325196.docx', '10_1693667325199.pdf', '10_1693665343682.doc', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '10_1693667325538.pdf', '10_1693667325544.pdf', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `national_id` varchar(255) NOT NULL,
  `phone` int(11) NOT NULL,
  `nationality` varchar(255) NOT NULL,
  `university` varchar(255) NOT NULL,
  `faculity` varchar(255) NOT NULL,
  `department` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `national_id`, `phone`, `nationality`, `university`, `faculity`, `department`, `img`) VALUES
(1, 'nader', 'das@info.com', '5531', '56165606', 68165, 'klnklmk', 'cscsd', 'dsc', '', ''),
(2, 'v', 'dscsd@csc.css', '$2b$10$G7JMtmC/OcOJHenwtDhLruV3fprBbfZYO8iGR0Y3ySe7siDDIYe52', '452452', 45451, 'zdc', 'dcs', 'casc', '', ''),
(3, 'نادر ممدوح شاكر عبدالمحسن', 'nader@info.com', '$2b$10$eItknlVFspntipdZgd/WZOH/bK3c6ml1wff8VJ5MVPfXzqJYMfBuO', '10', 1000, 'مصري', '1', 'ري', 'يرر', '10_1693678978281.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `best_message_service`
--
ALTER TABLE `best_message_service`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `formation_service`
--
ALTER TABLE `formation_service`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `grant_service`
--
ALTER TABLE `grant_service`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `knowledge_bank_service`
--
ALTER TABLE `knowledge_bank_service`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `magazine_checking_service`
--
ALTER TABLE `magazine_checking_service`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `manager`
--
ALTER TABLE `manager`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ser-man` (`service_id`);

--
-- Indexes for table `personal_examination_service`
--
ALTER TABLE `personal_examination_service`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `registration_services`
--
ALTER TABLE `registration_services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `submit`
--
ALTER TABLE `submit`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reg` (`ser_reg`),
  ADD KEY `form` (`ser_formation`),
  ADD KEY `grant` (`ser_grant`),
  ADD KEY `knowledge` (`ser_knowledge`),
  ADD KEY `magazine` (`ser_magazine`),
  ADD KEY `per` (`ser_personal`),
  ADD KEY `upgrade` (`ser_upgrade`),
  ADD KEY `best` (`ser_best`),
  ADD KEY `user` (`user_id`),
  ADD KEY `ser` (`service_id`),
  ADD KEY `sub` (`role`),
  ADD KEY `man` (`manager_id`);

--
-- Indexes for table `sub_manager`
--
ALTER TABLE `sub_manager`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `upgrade_service`
--
ALTER TABLE `upgrade_service`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `best_message_service`
--
ALTER TABLE `best_message_service`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `formation_service`
--
ALTER TABLE `formation_service`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `grant_service`
--
ALTER TABLE `grant_service`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `knowledge_bank_service`
--
ALTER TABLE `knowledge_bank_service`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `magazine_checking_service`
--
ALTER TABLE `magazine_checking_service`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `manager`
--
ALTER TABLE `manager`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `personal_examination_service`
--
ALTER TABLE `personal_examination_service`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `registration_services`
--
ALTER TABLE `registration_services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `submit`
--
ALTER TABLE `submit`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `sub_manager`
--
ALTER TABLE `sub_manager`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `upgrade_service`
--
ALTER TABLE `upgrade_service`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `manager`
--
ALTER TABLE `manager`
  ADD CONSTRAINT `man-ser` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `submit`
--
ALTER TABLE `submit`
  ADD CONSTRAINT `best` FOREIGN KEY (`ser_best`) REFERENCES `best_message_service` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `form` FOREIGN KEY (`ser_formation`) REFERENCES `formation_service` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `grant` FOREIGN KEY (`ser_grant`) REFERENCES `grant_service` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `knowledge` FOREIGN KEY (`ser_knowledge`) REFERENCES `knowledge_bank_service` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `magazine` FOREIGN KEY (`ser_magazine`) REFERENCES `magazine_checking_service` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `man` FOREIGN KEY (`manager_id`) REFERENCES `manager` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `per` FOREIGN KEY (`ser_personal`) REFERENCES `personal_examination_service` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `reg` FOREIGN KEY (`ser_reg`) REFERENCES `registration_services` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ser` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `upgrade` FOREIGN KEY (`ser_upgrade`) REFERENCES `upgrade_service` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

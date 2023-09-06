-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 03, 2023 at 03:57 PM
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
-- Database: `law`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `super_admin_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `first_time` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `super_admin_name`, `email`, `password`, `first_time`) VALUES
(1, 'admin', 'admin@info.com', '$2b$10$DZDClw785MSZlU0mOLFHxuiMp3V4hIX9gX2sxc0VdpWhVIXa8lCV.', 1);

-- --------------------------------------------------------

--
-- Table structure for table `application`
--

CREATE TABLE `application` (
  `application_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `department_id` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL COMMENT '0 => reJected\r\n1 => accepted\r\n2 => wating\r\n3 => wating For Update\r\n4=> accepted accepted\r\n5=> rejected accepted',
  `submission_date` date NOT NULL DEFAULT current_timestamp(),
  `comment` varchar(255) NOT NULL,
  `comment2` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `application`
--

INSERT INTO `application` (`application_id`, `student_id`, `department_id`, `status`, `submission_date`, `comment`, `comment2`) VALUES
(103, 121, 159, 2, '2023-08-30', '2023-09-13', 'ctctcttctt'),
(104, 122, 159, 2, '2023-08-30', '2023-09-13', 'ctctcttctt'),
(105, 123, 159, 2, '2023-08-30', '2023-09-19', 'esersersersersrres'),
(106, 124, 159, 2, '2023-08-30', '2023-09-23', 'vdsvsdvbsddfbfxbf'),
(107, 125, 159, 2, '2023-08-30', '2023-09-23', 'vdsvsdvbsddfbfxbf'),
(108, 126, 159, 2, '2023-08-30', '2023-09-23', 'vdsvsdvbsddfbfxbf'),
(109, 127, 160, 2, '2023-09-03', '2023-08-29', 'cvv'),
(110, 128, 159, 2, '2023-09-03', '2023-08-30', ',k..,i,i,ui,ui,ui,');

-- --------------------------------------------------------

--
-- Table structure for table `departments_of_faculty`
--

CREATE TABLE `departments_of_faculty` (
  `department_id` int(11) NOT NULL,
  `department_name` varchar(255) NOT NULL,
  `department_name_ar` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `departments_of_faculty`
--

INSERT INTO `departments_of_faculty` (`department_id`, `department_name`, `department_name_ar`) VALUES
(159, 'Legal studies program in French', 'برنامج الدراسات القانونية باللغة الفرنسيه'),
(160, 'Legal studies program in English', 'برنامج الدراسات القانونية باللغة الانجليزيه');

-- --------------------------------------------------------

--
-- Table structure for table `faculty`
--

CREATE TABLE `faculty` (
  `faculty_id` int(11) NOT NULL,
  `faculty_name` varchar(255) NOT NULL,
  `faculty_name_ar` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `manager`
--

CREATE TABLE `manager` (
  `manager_id` int(11) NOT NULL,
  `manager_name` varchar(255) NOT NULL,
  `manager_email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `type` int(1) NOT NULL,
  `first_time` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `manager`
--

INSERT INTO `manager` (`manager_id`, `manager_name`, `manager_email`, `password`, `type`, `first_time`) VALUES
(42, 'xvsdv', 'nader@info.com', '$2b$10$fY5vKRf5ufmvBTkqSOTCTeQRYSQ114zUQrR13lSAO3aTPqT/lVLoq', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `programs_of_department`
--

CREATE TABLE `programs_of_department` (
  `program_id` int(11) NOT NULL,
  `program_name` varchar(255) NOT NULL,
  `department_id` int(11) NOT NULL,
  `program_name_ar` varchar(255) NOT NULL,
  `diploma` tinyint(1) NOT NULL DEFAULT 0,
  `diploma_m` tinyint(1) NOT NULL DEFAULT 0,
  `diploma_g` tinyint(1) NOT NULL DEFAULT 0,
  `masters` tinyint(1) NOT NULL DEFAULT 0,
  `phd` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `student_id` int(11) NOT NULL,
  `student_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phonenumber` int(11) NOT NULL,
  `national_id` varchar(255) NOT NULL,
  `gender` tinyint(1) NOT NULL COMMENT '0 => female\r\n1 => male',
  `birthdate` date NOT NULL,
  `phoneArd` int(11) NOT NULL,
  `adress` varchar(255) NOT NULL,
  `nationality` varchar(255) NOT NULL,
  `previous_qu` varchar(255) NOT NULL,
  `setNum` int(11) NOT NULL,
  `school` varchar(255) NOT NULL,
  `enDeg` int(11) NOT NULL,
  `enDeg2` int(11) NOT NULL,
  `totalDeg` int(11) NOT NULL,
  `dadJob` varchar(255) NOT NULL,
  `phoneDad` int(11) NOT NULL,
  `img` varchar(255) NOT NULL,
  `academic_qualification` varchar(255) NOT NULL COMMENT 'صوره المؤهل الدراسي',
  `birth_certificate` varchar(255) NOT NULL COMMENT 'صوره شهاده الميلاد',
  `photo_national_id` varchar(255) NOT NULL,
  `other` varchar(255) NOT NULL,
  `enDegname` varchar(255) NOT NULL,
  `enDegname2` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`student_id`, `student_name`, `email`, `password`, `phonenumber`, `national_id`, `gender`, `birthdate`, `phoneArd`, `adress`, `nationality`, `previous_qu`, `setNum`, `school`, `enDeg`, `enDeg2`, `totalDeg`, `dadJob`, `phoneDad`, `img`, `academic_qualification`, `birth_certificate`, `photo_national_id`, `other`, `enDegname`, `enDegname2`) VALUES
(112, '', '', '', 0, '', 0, '0000-00-00', 0, '', '', '', 0, '', 40, 0, 0, '', 0, '', '', '', '', '', '', ''),
(113, '', '', '', 0, '', 0, '0000-00-00', 0, '', '', '', 0, '', 0, 39, 0, '', 0, '', '', '', '', '', '', ''),
(114, '', '', '', 0, '', 0, '0000-00-00', 0, '', '', '', 0, '', 38, 0, 0, '', 0, '', '', '', '', '', '', ''),
(115, '', '', '', 0, '', 0, '0000-00-00', 0, '', '', '', 0, '', 30, 0, 0, '', 0, '', '', '', '', '', '', ''),
(116, '', '', '', 0, '', 0, '0000-00-00', 0, '', '', '', 0, '', 20, 0, 0, '', 0, '', '', '', '', '', '', ''),
(117, '', '', '', 0, '', 0, '0000-00-00', 0, '', '', '', 0, '', 31, 0, 0, '', 0, '', '', '', '', '', '', ''),
(118, '', '', '', 0, '', 0, '0000-00-00', 0, '', '', '', 0, '', 0, 14, 0, '', 0, '', '', '', '', '', '', ''),
(119, '', '', '', 0, '', 0, '0000-00-00', 0, '', '', '', 0, '', 0, 11, 0, '', 0, '', '', '', '', '', '', ''),
(120, '', '', '', 0, '', 0, '0000-00-00', 0, '', '', '', 0, '', 15, 0, 0, '', 0, '', '', '', '', '', '', ''),
(121, 'sfsdfsdfsssssssssss', 'sdfsdf@sdfsdf.com', '$2b$10$y6fLgPQwNfE5trqB1X.HLuKzs1Y/jLYT2HyDmp2ZEJM3c9qzkXBOK', 2147483647, 'sdfsd56768676786', 1, '2023-08-15', 53467564, 'teteert', 'sdfsdf', 'dfgdfg', 12232, 'fgdfgdfg', 40, 40, 4534, 'fffgfdfgdfg', 2147483647, 'sfsdfsdfsssssssssss_03.jpg_1693400576398.jpg', 'sfsdfsdfsssssssssss_01.jpg_1693400576412.jpg', 'sfsdfsdfsssssssssss_WhatsApp Image 2023-08-30 at 13.35.47.jpg_1693400576403.jpg', 'sfsdfsdfsssssssssss_010.jpg_1693400576402.jpg', '', 'gergerherh', '3312'),
(122, 'Nader Mamdouh', 'nadermamdouh68@gmail.com', '$2b$10$6rA0V8iAuOhlRk1dbCwGfeby6SSW.4tUOntip3hKxYUw6kxK/Gute', 1125257350, '353535435354', 1, '2023-08-09', 758586786, 'Giza, cairo', 'weewewe', 'fwefwe', 78676, 'wfwefe', 39, 39, 786786, 'efweefwefw', 2147483647, 'Nader Mamdouh_010.jpg_1693400666272.jpg', 'Nader Mamdouh_2.jpg_1693400666274.jpg', 'Nader Mamdouh_010.jpg_1693400666273.jpg', 'Nader Mamdouh_010.jpg_1693400666272.jpg', '', 'sefsefwf', 'efwefwfw'),
(123, 'NaderMamdouh', 'nadermamdouh7768@gmail.com', '$2b$10$UELzYocgW6tOhgGUdtguye.fvdhMwS6uHytJRhcVObZbDGRr/onwS', 1125257350, '56865567656', 1, '2023-08-07', 32352, 'Giza', 'dgdfgdf', 'fsdfsd', 38, 'sdfsdfsdf', 38, 38, 38, 'sdfsdfsf', 2352523, 'NaderMamdouh_WhatsApp Image 2023-08-30 at 13.35.45.jpg_1693400774039.jpg', 'NaderMamdouh_01.jpg_1693400774069.jpg', 'NaderMamdouh_WhatsApp Image 2023-08-30 at 13.35.45.jpg_1693400774046.jpg', 'NaderMamdouh_WhatsApp Image 2023-08-30 at 13.35.47.jpg_1693400774043.jpg', '', 'dsfsdf', 'sfsff'),
(124, 'Nader Mamdouh', 'nadermamdouh638@gmail.com', '$2b$10$koXPSDNao0I16hkOpEgr/.qh5iN6PC24lO5cAFU6i.p65a/xP6sPy', 1125257350, '3687653', 1, '2023-08-22', 8765, 'Giza, cairo', 'sdfsdgsdg', 'nbvnbvnbvn', 37, 'nvnvnvnb', 37, 37, 37, 'nvbnvbn', 6876536, 'Nader Mamdouh_010.jpg_1693400871736.jpg', 'Nader Mamdouh_03.jpg_1693400871774.jpg', 'Nader Mamdouh_WhatsApp Image 2023-08-30 at 10.44.36.jpg_1693400871773.jpg', 'Nader Mamdouh_03.jpg_1693400871737.jpg', '', 'dfgfg', 'bvnbvnbvn'),
(125, 'Nader Mamdouh', 'nadermamdoh68@gmail.com', '$2b$10$CHLJF.0T/MLK7Vtc5oxxyud.VF6VOxLwjp8nm5STGhl0WmaCdNFgO', 1125257350, '9865', 1, '2023-08-07', 0, 'Giza, cairo', 'wefgdfg', 'hfghhgf', 36, 'khgf', 36, 36, 36, 'hkg', 1125257350, 'Nader Mamdouh_WhatsApp Image 2023-08-30 at 13.35.45.jpg_1693400977750.jpg', 'Nader Mamdouh_WhatsApp Image 2023-08-30 at 13.35.45.jpg_1693400977785.jpg', 'Nader Mamdouh_06.jpg_1693400977784.jpg', 'Nader Mamdouh_010.jpg_1693400977784.jpg', '', 'fghg', 'ghgf'),
(126, 'Nader Mamdouh', 'nadermauh68@gmail.com', '$2b$10$wUsH5EAXUeVX5I1Xbd/xpeAH8sXxi.ZK/5gicLz90WCRQTuCw0O3W', 1125257350, '9863', 1, '2023-08-13', 1125257350, 'Giza, cairo', '5dgfnfg', 'ddfdfd', 35, 'cvfvcdd', 35, 35, 35, 'fvdfvdfvd', 86868, 'Nader Mamdouh_WhatsApp Image 2023-08-30 at 10.44.3722.jpg_1693401042683.jpg', 'Nader Mamdouh_06.jpg_1693401042687.jpg', 'Nader Mamdouh_WhatsApp Image 2023-08-30 at 13.35.45.jpg_1693401042685.jpg', 'Nader Mamdouh_010.jpg_1693401042684.jpg', '', 'fdfdcvfd', 'sdsdf'),
(127, 'نادر ممدوح شاكر ', 'nader@info.com', '$2b$10$tWdraJCLgdhwEcHkIq2HUu3l2HBO7Ie766lAZ4h5lV1HivsY6dYcq', 1125257350, '302084651513', 1, '2023-09-02', 29623, 'الجيزه', 'مصري', 'بلعب', 123, 'مم', 38, 30, 323, 'ممسشسك', 1125257000, 'نادر ممدوح شاكر _image (8).jpg_1693736123007.jpg', 'نادر ممدوح شاكر _WhatsApp Image 2023-07-24 at 15.02.12.jpg_1693736123060.jpg', 'نادر ممدوح شاكر _ID.jpg_1693736123045.jpg', 'نادر ممدوح شاكر _124406.jpg_1693736123016.jpg', '', 'انجليزي', 'فرنسي'),
(128, 'memooooooooo', 'memo22@info.com', '$2b$10$s5M98fPUaR0Y5B.qU1zQcOBrPNJzglHocPcnS9gl6UzeDZqCvv4Oy', 112525, '10101010', 1, '2023-08-30', 222222, 'lilklkk', 'vdsvsdvsd', 'klkk', 200, 'klk', 32, 40, 300, 'kllkkklkl', 2147483647, 'memooooooooo_image (12).jpg_1693747826899.jpg', 'memooooooooo_Ø±Ø±.png_1693747833450.png', 'memooooooooo_image (1).jpg_1693747831148.jpg', 'memooooooooo_WhatsApp Image 2023-08-28 at 22.28.05.jpg_1693747827551.jpg', 'memooooooooo_WhatsApp Image 2023-08-20 at 21.21.49.jpg_1693748012110.jpg', 'en', 'fr');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `application`
--
ALTER TABLE `application`
  ADD PRIMARY KEY (`application_id`),
  ADD KEY `stud-app` (`student_id`),
  ADD KEY `depa-app` (`department_id`);

--
-- Indexes for table `departments_of_faculty`
--
ALTER TABLE `departments_of_faculty`
  ADD PRIMARY KEY (`department_id`);

--
-- Indexes for table `faculty`
--
ALTER TABLE `faculty`
  ADD PRIMARY KEY (`faculty_id`);

--
-- Indexes for table `manager`
--
ALTER TABLE `manager`
  ADD PRIMARY KEY (`manager_id`);

--
-- Indexes for table `programs_of_department`
--
ALTER TABLE `programs_of_department`
  ADD PRIMARY KEY (`program_id`),
  ADD KEY `program-dep` (`department_id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`student_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `application`
--
ALTER TABLE `application`
  MODIFY `application_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=111;

--
-- AUTO_INCREMENT for table `departments_of_faculty`
--
ALTER TABLE `departments_of_faculty`
  MODIFY `department_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=161;

--
-- AUTO_INCREMENT for table `faculty`
--
ALTER TABLE `faculty`
  MODIFY `faculty_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `manager`
--
ALTER TABLE `manager`
  MODIFY `manager_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `programs_of_department`
--
ALTER TABLE `programs_of_department`
  MODIFY `program_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=380;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `student_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=129;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `application`
--
ALTER TABLE `application`
  ADD CONSTRAINT `depa-app` FOREIGN KEY (`department_id`) REFERENCES `departments_of_faculty` (`department_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `stud-app` FOREIGN KEY (`student_id`) REFERENCES `students` (`student_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `programs_of_department`
--
ALTER TABLE `programs_of_department`
  ADD CONSTRAINT `program-dep` FOREIGN KEY (`department_id`) REFERENCES `departments_of_faculty` (`department_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 23, 2023 at 09:24 AM
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
  `comment` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
(159, 'dep1Faculty of Law in Arabic', 'الحقوق لغه عربيه'),
(160, 'Faculty of Law in English', 'كليه الحقوق لغه انجليزيه');

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
  `photo_national_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
  MODIFY `application_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=103;

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
  MODIFY `student_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=112;

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

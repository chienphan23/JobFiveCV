USE [master]
GO
/****** Object:  Database [job5]    Script Date: 26/05/2024 10:32:42 PM ******/
CREATE DATABASE [job5]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'job5', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLEXPRESS\MSSQL\DATA\job5.mdf' , SIZE = 4096KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'job5_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLEXPRESS\MSSQL\DATA\job5_log.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [job5] SET COMPATIBILITY_LEVEL = 120
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [job5].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [job5] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [job5] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [job5] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [job5] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [job5] SET ARITHABORT OFF 
GO
ALTER DATABASE [job5] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [job5] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [job5] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [job5] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [job5] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [job5] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [job5] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [job5] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [job5] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [job5] SET  DISABLE_BROKER 
GO
ALTER DATABASE [job5] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [job5] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [job5] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [job5] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [job5] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [job5] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [job5] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [job5] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [job5] SET  MULTI_USER 
GO
ALTER DATABASE [job5] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [job5] SET DB_CHAINING OFF 
GO
ALTER DATABASE [job5] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [job5] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [job5] SET DELAYED_DURABILITY = DISABLED 
GO
USE [job5]
GO
/****** Object:  Table [dbo].[applications]    Script Date: 26/05/2024 10:32:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[applications](
	[applicationdate] [datetime2](6) NULL,
	[applicationid] [bigint] IDENTITY(1,1) NOT NULL,
	[candidateid] [bigint] NOT NULL,
	[jobid] [bigint] NOT NULL,
	[status] [bigint] NOT NULL,
	[cv] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[applicationid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[applicationstatus]    Script Date: 26/05/2024 10:32:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[applicationstatus](
	[status] [bigint] IDENTITY(1,1) NOT NULL,
	[description] [nvarchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[status] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[candidates]    Script Date: 26/05/2024 10:32:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[candidates](
	[yearexperience] [int] NULL,
	[birthdate] [datetime2](6) NULL,
	[candidateid] [bigint] NOT NULL,
	[address] [nvarchar](255) NULL,
	[bio] [nvarchar](255) NULL,
	[currentjob] [nvarchar](255) NULL,
	[email] [varchar](255) NULL,
	[fullname] [nvarchar](255) NULL,
	[phone] [varchar](255) NULL,
	[photo] [varchar](255) NULL,
	[provincename] [nvarchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[candidateid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[cvs]    Script Date: 26/05/2024 10:32:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cvs](
	[candidateid] [bigint] NULL,
	[cvid] [bigint] IDENTITY(1,1) NOT NULL,
	[cvfile] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[cvid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[employerreviews]    Script Date: 26/05/2024 10:32:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[employerreviews](
	[score] [float] NULL,
	[candidateid] [bigint] NOT NULL,
	[employerid] [bigint] NOT NULL,
	[reviewdate] [datetime2](6) NULL,
	[reviewid] [bigint] IDENTITY(1,1) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[reviewid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[employers]    Script Date: 26/05/2024 10:32:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[employers](
	[approved] [bit] NULL,
	[reviewscore] [float] NULL,
	[employerid] [bigint] NOT NULL,
	[rankid] [bigint] NOT NULL,
	[address] [nvarchar](255) NULL,
	[background] [varchar](255) NULL,
	[description] [nvarchar](max) NULL,
	[email] [varchar](255) NULL,
	[employername] [nvarchar](255) NULL,
	[phone] [varchar](255) NULL,
	[photo] [varchar](255) NULL,
	[provincename] [nvarchar](255) NULL,
 CONSTRAINT [PK__employer__F45FF8E8DDDA0520] PRIMARY KEY CLUSTERED 
(
	[employerid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[follows]    Script Date: 26/05/2024 10:32:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[follows](
	[candidateid] [bigint] NOT NULL,
	[employerid] [bigint] NOT NULL,
	[followdate] [datetime2](6) NULL,
	[followid] [bigint] IDENTITY(1,1) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[followid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[industries]    Script Date: 26/05/2024 10:32:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[industries](
	[industryid] [bigint] IDENTITY(1,1) NOT NULL,
	[industryname] [nvarchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[industryid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[invalidatedtoken]    Script Date: 26/05/2024 10:32:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[invalidatedtoken](
	[expiry_time] [datetime2](6) NULL,
	[id] [varchar](255) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[jobbenefits]    Script Date: 26/05/2024 10:32:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[jobbenefits](
	[benefitid] [bigint] IDENTITY(1,1) NOT NULL,
	[jobid] [bigint] NOT NULL,
	[description] [nvarchar](max) NULL,
 CONSTRAINT [PK__jobbenef__50D6F83C7D55F2A9] PRIMARY KEY CLUSTERED 
(
	[benefitid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[jobdescriptions]    Script Date: 26/05/2024 10:32:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[jobdescriptions](
	[descriptionid] [bigint] IDENTITY(1,1) NOT NULL,
	[jobid] [bigint] NOT NULL,
	[description] [nvarchar](max) NULL,
 CONSTRAINT [PK__jobdescr__F9579B6AC2E79217] PRIMARY KEY CLUSTERED 
(
	[descriptionid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[jobinterests]    Script Date: 26/05/2024 10:32:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[jobinterests](
	[candidateid] [bigint] NOT NULL,
	[interestdate] [datetime2](6) NULL,
	[jobid] [bigint] NOT NULL,
	[jobinterestid] [bigint] IDENTITY(1,1) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[jobinterestid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[jobreports]    Script Date: 26/05/2024 10:32:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[jobreports](
	[candidateid] [bigint] NOT NULL,
	[jobid] [bigint] NOT NULL,
	[reportdate] [datetime2](6) NULL,
	[reportid] [bigint] IDENTITY(1,1) NOT NULL,
	[description] [nvarchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[reportid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[jobrequirements]    Script Date: 26/05/2024 10:32:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[jobrequirements](
	[jobid] [bigint] NOT NULL,
	[requirementid] [bigint] IDENTITY(1,1) NOT NULL,
	[description] [nvarchar](max) NULL,
 CONSTRAINT [PK__jobrequi__60E393CA74424174] PRIMARY KEY CLUSTERED 
(
	[requirementid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[jobs]    Script Date: 26/05/2024 10:32:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[jobs](
	[numposition] [int] NULL,
	[removed] [bit] NULL,
	[reuptimesleft] [int] NULL,
	[typeid] [int] NOT NULL,
	[yearexperience] [int] NULL,
	[employerid] [bigint] NOT NULL,
	[expirationdate] [datetime2](6) NULL,
	[jobid] [bigint] IDENTITY(1,1) NOT NULL,
	[maxsalary] [bigint] NULL,
	[minsalary] [bigint] NULL,
	[postdate] [datetime2](6) NULL,
	[address] [nvarchar](255) NULL,
	[jobname] [nvarchar](255) NULL,
	[jobposition] [nvarchar](255) NULL,
	[location] [nvarchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[jobid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[jobs_industries]    Script Date: 26/05/2024 10:32:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[jobs_industries](
	[industries_industryid] [bigint] NOT NULL,
	[job_jobid] [bigint] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[industries_industryid] ASC,
	[job_jobid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[jobtypes]    Script Date: 26/05/2024 10:32:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[jobtypes](
	[typeid] [int] IDENTITY(1,1) NOT NULL,
	[type] [nvarchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[typeid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[notifications]    Script Date: 26/05/2024 10:32:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[notifications](
	[seen] [bit] NULL,
	[notificationid] [bigint] IDENTITY(1,1) NOT NULL,
	[postdate] [datetime2](6) NULL,
	[userid] [bigint] NOT NULL,
	[message] [nvarchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[notificationid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[provinces]    Script Date: 26/05/2024 10:32:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[provinces](
	[provincename] [nvarchar](255) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[provincename] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ranks]    Script Date: 26/05/2024 10:32:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ranks](
	[displaytime] [int] NULL,
	[limitpost] [int] NULL,
	[price] [float] NULL,
	[reuptimes] [int] NULL,
	[rankid] [bigint] IDENTITY(1,1) NOT NULL,
	[description] [nvarchar](255) NULL,
	[photo] [varchar](255) NULL,
	[rankname] [nvarchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[rankid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[timelines]    Script Date: 26/05/2024 10:32:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[timelines](
	[candidateid] [bigint] NOT NULL,
	[timelineid] [bigint] IDENTITY(1,1) NOT NULL,
	[job] [varchar](255) NULL,
	[stage] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[timelineid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[users]    Script Date: 26/05/2024 10:32:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[users](
	[blocked] [bit] NULL,
	[userid] [bigint] IDENTITY(1,1) NOT NULL,
	[password] [nvarchar](255) NOT NULL,
	[role] [varchar](255) NOT NULL,
	[username] [varchar](255) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[userid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[applications] ON 

INSERT [dbo].[applications] ([applicationdate], [applicationid], [candidateid], [jobid], [status], [cv]) VALUES (CAST(N'2024-05-26T02:02:00.3650000' AS DateTime2), 1, 8, 3, 2, N'20240526-020200-LIEN-TRUONG-SO-GIAO-DUC-VA-DAO-TAO-NGHE-AN-QUYNH-LUU-HOANG-MAI-THAI-HOA-YEN-THANH-2024.pdf')
INSERT [dbo].[applications] ([applicationdate], [applicationid], [candidateid], [jobid], [status], [cv]) VALUES (CAST(N'2024-05-26T11:42:36.8930000' AS DateTime2), 2, 7, 11, 3, N'20240526-113857-DE-TRUONG-CHUYEN-HA-TINH-2024.pdf')
INSERT [dbo].[applications] ([applicationdate], [applicationid], [candidateid], [jobid], [status], [cv]) VALUES (CAST(N'2024-05-26T16:15:09.1640000' AS DateTime2), 4, 26, 11, 2, N'20240526-041405-DE-TRUONG-CHUYEN-HA-TINH-2024.pdf')
INSERT [dbo].[applications] ([applicationdate], [applicationid], [candidateid], [jobid], [status], [cv]) VALUES (CAST(N'2024-05-26T16:36:17.3640000' AS DateTime2), 5, 27, 2, 1, N'20240526-043538-LIEN-TRUONG-SO-GIAO-DUC-VA-DAO-TAO-NGHE-AN-QUYNH-LUU-HOANG-MAI-THAI-HOA-YEN-THANH-2024.pdf')
INSERT [dbo].[applications] ([applicationdate], [applicationid], [candidateid], [jobid], [status], [cv]) VALUES (CAST(N'2024-05-26T16:50:15.1230000' AS DateTime2), 6, 27, 26, 1, N'20240526-043538-LIEN-TRUONG-SO-GIAO-DUC-VA-DAO-TAO-NGHE-AN-QUYNH-LUU-HOANG-MAI-THAI-HOA-YEN-THANH-2024.pdf')
INSERT [dbo].[applications] ([applicationdate], [applicationid], [candidateid], [jobid], [status], [cv]) VALUES (CAST(N'2024-05-26T17:04:59.9200000' AS DateTime2), 7, 28, 2, 1, N'20240526-050422-DE-TRUONG-CHUYEN-HA-TINH-2024.pdf')
SET IDENTITY_INSERT [dbo].[applications] OFF
GO
SET IDENTITY_INSERT [dbo].[applicationstatus] ON 

INSERT [dbo].[applicationstatus] ([status], [description]) VALUES (1, N'Vừa ứng tuyển')
INSERT [dbo].[applicationstatus] ([status], [description]) VALUES (2, N'Đã duyệt')
INSERT [dbo].[applicationstatus] ([status], [description]) VALUES (3, N'Từ chối')
SET IDENTITY_INSERT [dbo].[applicationstatus] OFF
GO
INSERT [dbo].[candidates] ([yearexperience], [birthdate], [candidateid], [address], [bio], [currentjob], [email], [fullname], [phone], [photo], [provincename]) VALUES (0, CAST(N'2002-11-24T00:00:00.0000000' AS DateTime2), 7, N'07 Lê Đức Thọ, Điện Ngọc, Điện Bàn', NULL, NULL, N'c1@gmail.com', N'Mai Xuân Quốc', N'0953853823', N'nophoto.png', N'Quảng Nam')
INSERT [dbo].[candidates] ([yearexperience], [birthdate], [candidateid], [address], [bio], [currentjob], [email], [fullname], [phone], [photo], [provincename]) VALUES (0, CAST(N'2024-05-26T00:00:00.0000000' AS DateTime2), 8, N'07 Lê Đức Thọ, Điện Ngọc, Điện Bàn', NULL, NULL, N'c2@gmail.com', N'Phạm Văn Hoàng', N'0953853823', N'nophoto.png', N'Quảng Nam')
INSERT [dbo].[candidates] ([yearexperience], [birthdate], [candidateid], [address], [bio], [currentjob], [email], [fullname], [phone], [photo], [provincename]) VALUES (1, CAST(N'2024-05-26T00:00:00.0000000' AS DateTime2), 26, N'77 Nguyễn Huệ', N'Xin chào', N'Tester', N'nhatson247@gmail.com', N'Nguyễn Nhật Sơn', N'0935551552', N'nophoto.png', N'Thừa Thiên Huế')
INSERT [dbo].[candidates] ([yearexperience], [birthdate], [candidateid], [address], [bio], [currentjob], [email], [fullname], [phone], [photo], [provincename]) VALUES (0, CAST(N'2024-05-26T00:00:00.0000000' AS DateTime2), 27, N'77 Nguyễn Huệ', N'', N'', N'xuanquochbt@gmail.com', N'Mai Xuân Quốc', N'0394082411', N'nophoto.png', N'Cà Mau')
INSERT [dbo].[candidates] ([yearexperience], [birthdate], [candidateid], [address], [bio], [currentjob], [email], [fullname], [phone], [photo], [provincename]) VALUES (1, CAST(N'2002-05-26T00:00:00.0000000' AS DateTime2), 28, N'77 Nguyễn Huệ', N'Xin chào', N'Tester', N'hoang@gmail.com', N'Phạm Văn Hoàng', N'0935551552', N'nophoto.png', N'Thừa Thiên Huế')
GO
SET IDENTITY_INSERT [dbo].[cvs] ON 

INSERT [dbo].[cvs] ([candidateid], [cvid], [cvfile]) VALUES (8, 4, N'20240526-114353-LIEN-TRUONG-SO-GIAO-DUC-VA-DAO-TAO-NGHE-AN-QUYNH-LUU-HOANG-MAI-THAI-HOA-YEN-THANH-2024.pdf')
INSERT [dbo].[cvs] ([candidateid], [cvid], [cvfile]) VALUES (26, 5, N'20240526-041405-DE-TRUONG-CHUYEN-HA-TINH-2024.pdf')
INSERT [dbo].[cvs] ([candidateid], [cvid], [cvfile]) VALUES (28, 9, N'20240526-050422-DE-TRUONG-CHUYEN-HA-TINH-2024.pdf')
INSERT [dbo].[cvs] ([candidateid], [cvid], [cvfile]) VALUES (27, 10, N'20240526-091951-LIEN-TRUONG-SO-GIAO-DUC-VA-DAO-TAO-NGHE-AN-QUYNH-LUU-HOANG-MAI-THAI-HOA-YEN-THANH-2024.pdf')
INSERT [dbo].[cvs] ([candidateid], [cvid], [cvfile]) VALUES (7, 11, N'20240526-095510-DE-TRUONG-CHUYEN-HA-TINH-2024.pdf')
INSERT [dbo].[cvs] ([candidateid], [cvid], [cvfile]) VALUES (7, 12, N'20240526-095549-LIEN-TRUONG-SO-GIAO-DUC-VA-DAO-TAO-NGHE-AN-QUYNH-LUU-HOANG-MAI-THAI-HOA-YEN-THANH-2024.pdf')
SET IDENTITY_INSERT [dbo].[cvs] OFF
GO
SET IDENTITY_INSERT [dbo].[employerreviews] ON 

INSERT [dbo].[employerreviews] ([score], [candidateid], [employerid], [reviewdate], [reviewid]) VALUES (5, 7, 5, CAST(N'2024-05-26T01:57:41.3810000' AS DateTime2), 1)
INSERT [dbo].[employerreviews] ([score], [candidateid], [employerid], [reviewdate], [reviewid]) VALUES (5, 7, 2, CAST(N'2024-05-26T11:07:49.3360000' AS DateTime2), 3)
INSERT [dbo].[employerreviews] ([score], [candidateid], [employerid], [reviewdate], [reviewid]) VALUES (2, 7, 4, CAST(N'2024-05-26T11:08:01.3030000' AS DateTime2), 4)
INSERT [dbo].[employerreviews] ([score], [candidateid], [employerid], [reviewdate], [reviewid]) VALUES (4, 7, 6, CAST(N'2024-05-26T11:08:20.6290000' AS DateTime2), 5)
INSERT [dbo].[employerreviews] ([score], [candidateid], [employerid], [reviewdate], [reviewid]) VALUES (4, 8, 2, CAST(N'2024-05-26T11:09:34.2940000' AS DateTime2), 6)
INSERT [dbo].[employerreviews] ([score], [candidateid], [employerid], [reviewdate], [reviewid]) VALUES (5, 8, 4, CAST(N'2024-05-26T11:09:45.5240000' AS DateTime2), 7)
INSERT [dbo].[employerreviews] ([score], [candidateid], [employerid], [reviewdate], [reviewid]) VALUES (3, 8, 6, CAST(N'2024-05-26T11:09:58.9920000' AS DateTime2), 8)
INSERT [dbo].[employerreviews] ([score], [candidateid], [employerid], [reviewdate], [reviewid]) VALUES (5, 8, 5, CAST(N'2024-05-26T11:10:06.8070000' AS DateTime2), 9)
INSERT [dbo].[employerreviews] ([score], [candidateid], [employerid], [reviewdate], [reviewid]) VALUES (4, 26, 5, CAST(N'2024-05-26T16:15:16.4380000' AS DateTime2), 10)
INSERT [dbo].[employerreviews] ([score], [candidateid], [employerid], [reviewdate], [reviewid]) VALUES (5, 27, 3, CAST(N'2024-05-26T16:36:25.7870000' AS DateTime2), 11)
INSERT [dbo].[employerreviews] ([score], [candidateid], [employerid], [reviewdate], [reviewid]) VALUES (4, 28, 3, CAST(N'2024-05-26T17:05:09.4290000' AS DateTime2), 12)
SET IDENTITY_INSERT [dbo].[employerreviews] OFF
GO
INSERT [dbo].[employers] ([approved], [reviewscore], [employerid], [rankid], [address], [background], [description], [email], [employername], [phone], [photo], [provincename]) VALUES (1, 4.5, 2, 3, N'Đầu đrường 14, KCX Tân Thuận Q7 TPHCM', N'nobackground.png', N'Bosch Global Software Technologies Company Limited (Previous name: RBVH - Robert Bosch Engineering and Business Solutions Vietnam Company Limited) is 100% owned subsidiary of Robert Bosch GmbH. BGSW Vietnam has started its operations from 19th October, 2010 at E-Town2 in HCMC. Today, BGSW Vietnam has offices in both Ho Chi Minh city and Hanoi with more than 4500 currently working.', N'e1@gmail.com', N'Công Ty TNHH Cch Top (Vn)', N'0953853833', N'20240525-104344-e1.png', N'Thành phố Hồ Chí Minh')
INSERT [dbo].[employers] ([approved], [reviewscore], [employerid], [rankid], [address], [background], [description], [email], [employername], [phone], [photo], [provincename]) VALUES (1, 4.5, 3, 1, N'248 Đồng Đen, Phường 10, Quận Tân Bình', N'nobackground.png', N'Công ty Cổ Phần Kinh Doanh Dịch Vụ Bảo Vệ Long Hải là đơn vị chuyên cung cấp dịch vụ bảo vệ chuyên nghiệp cho Quý khách hàng như: Ngân Hàng, Nhà máy - xí nghiệp, Nhà hàng, Rạp chiếu phim, chung cư cao cấp, công trường,bảo vệ yếu nhân. Công ty Cổ Phần Kinh Doanh Dịch Vụ Bảo Vệ Long Hải còn tạo điều kiện cho nhiều người lao động có công việc làm với thu nhập ổn định và làm việc trên khắp mọi miền của đất nước Việt Nam. Với sự uy tín trên thị trường, Công ty Cổ Phần Kinh Doanh Dịch Vụ Bảo Vệ Long Hải Cam kết sẽ cung cấp cho quý Khách hàng một dịch vụ tốt nhất, chuyên nghiệp và an toàn nhất với mức phí tiết kiệm nhất trong lĩnh vực bảo vệ. Hãy đến với Bảo Vệ Long Hải bạn sẽ được đáp ứng một dịch vụ tốt nhất, môi trường làm việc thân thiện và uy tín.', N'e2@gmail.com', N'Công Ty Cổ Phần Kinh Doanh Dịch Vụ Bảo Vệ Long Hải', N'0953853853', N'20240525-110239-e2.png', N'Thành phố Hồ Chí Minh')
INSERT [dbo].[employers] ([approved], [reviewscore], [employerid], [rankid], [address], [background], [description], [email], [employername], [phone], [photo], [provincename]) VALUES (1, 3.5, 4, 3, N'VP giao dịch FPT Telecom - 31 Lê Văn Quới, Phường Bình Trị Đông, Quận Bình Tân', N'nobackground.png', N'Được thành lập ngày 31/01/1997, Công ty Cổ phần Viễn thông FPT (FPT Telecom) khởi đầu từ Trung tâm Dịch vụ Trực tuyến với 4 thành viên sáng lập cùng sản phẩm mạng Intranet đầu tiên của Việt Nam mang tên “Trí tuệ Việt Nam – TTVN”. Sau 18 năm hoạt động, FPT Telecom đã trở thành một trong những nhà cung cấp dịch vụ viễn thông và Internet hàng đầu khu vực với gần 6000 nhân viên, 59 chi nhánh trong và ngoài nước. Hiện nay, FPT Telecom đang cung cấp các sản phẩm, dịch vụ chính bao gồm: Internet băng rộng: ADSL/VDSL, TriplePlay, FTTH Kênh thuê riêng, Tên miền, Email, Lưu trữ web, Trung tâm dữ liệu Các dịch vụ giá trị gia tăng trên Internet: Truyền hình internet (FPT play HD), Điện thoại cố định (VoIP), Giám sát từ xa(IP Camera), Chứng thực chữ ký số (CA), Điện toán đám mây (Cloud computing),...', N'e3@gmail.com', N'Công Ty Cổ Phần Viễn Thông Fpt', N'0953853853', N'20240525-111624-e3.png', N'Thành phố Hồ Chí Minh')
INSERT [dbo].[employers] ([approved], [reviewscore], [employerid], [rankid], [address], [background], [description], [email], [employername], [phone], [photo], [provincename]) VALUES (1, 4.67, 5, 4, N'Tổ 60, ấp Long Thịnh - Xã Long Khánh - Huyện Bến Cầu', N'nobackground.png', N'Vinamilk mong muốn trở thành sản phẩm được yêu thích ở mọi khu vực, lãnh thổ. Vì thế chúng tôi tâm niệm rằng chất lượng và sáng tạo là người bạn đồng hành của Vinamilk. Vinamilk xem khách hàng là trung tâm và cam kết đáp ứng mọi nhu cầu của khách hàng. Chính sách chất lượng Luôn thỏa mãn và có trách nhiệm với khách hàng bằng cách không ngừng cải tiến, đa dạng hóa sản phẩm và dịch vụ, đảm bảo chất lượng, an toàn vệ sinh thực phẩm với giá cả cạnh tranh, tôn trọng đạo đức kinh doanh và tuân theo luật định.', N'e4@gmail.com', N'Công Ty TNHH Bò Sữa Việt Nam', N'0953853853', N'20240525-114608-e4.png', N'Tây Ninh')
INSERT [dbo].[employers] ([approved], [reviewscore], [employerid], [rankid], [address], [background], [description], [email], [employername], [phone], [photo], [provincename]) VALUES (1, 3.5, 6, 2, N'102C Nguyễn Văn Cừ, P.Nguyễn Cư Trinh, Quận 1', N'nobackground.png', N'Công Ty TNHH Bảo Hiểm Nhân Thọ Sun Life Việt Nam', N'e5@gmail.com', N'Công Ty TNHH Bảo Hiểm Nhân Thọ Sun Life Việt Nam', N'0953853853', N'20240525-115525-e5.png', N'Thành phố Hồ Chí Minh')
INSERT [dbo].[employers] ([approved], [reviewscore], [employerid], [rankid], [address], [background], [description], [email], [employername], [phone], [photo], [provincename]) VALUES (1, 0, 9, 2, N'Tòa nhà AXYS, Số 12A Núi Thành, Tân Bình', N'nobackground.png', N'Công ty Cổ phần BPO MẮT BÃO - nhà cung cấp dịch vụ: Chăm sóc khách hàng (Call Centrer), xử lý dữ liệu, tư vấn, đào tạo tốt nhất tại Việt Nam. MẮT BÃO BPO được biết đến với dịch vụ chuyên nghiệp, đa dạng cùng nền văn hóa đặc sắc với hơn 2000 nhân sự trên cả nước. Đáp ứng nhu cầu phát triển bền vững, Công ty chúng tôi vinh dự mời quý anh chị tìm hiểu và gia nhập cùng đội ngũ MẮT BÃO BPO. Chúng tôi rất trân trọng sự giới thiệu của quý anh chị đến bạn bè, đồng nghiệp về MẮT BÃO, môi trường làm việc với trang thiết bị hiện đại, thu nhập tương xứng với khả năng.', N'e6@gmail.com', N'Công Ty Cổ Phần BPO Mắt Bão', N'0953853853', N'20240526-111732-e6.png', N'Thành phố Hồ Chí Minh')
INSERT [dbo].[employers] ([approved], [reviewscore], [employerid], [rankid], [address], [background], [description], [email], [employername], [phone], [photo], [provincename]) VALUES (1, 0, 10, 1, N'Hoài Đức, Quốc Oai, Bắc Từ Liêm, Huế', N'nobackground.png', N'Nabati Việt Nam là công ty 100% vốn đầu tư từ Indonesia, chuyên phân phối sản phẩm bánh được nhập khẩu trực tiếp từ Indonesia với 4 thương hiệu: Richeese, Richoco, Vanila, Nextar. Bánh xốp phô mai Richeese Nabati với lớp phô mai bên trong bánh xốp. Bánh bắp phô mai Richeese Ahh với sự kết hợp của bắp và phô mai phủ bên ngoài và trong nhân bánh. Bánh phô mai Richeese Roll’s với lớp nhân phô mai bên trong bánh xốp. Các sản phẩm của Nabati hướng đến đối tượng tiêu dùng là giới trẻ và gia đình, sản phẩm có kiểu dáng được thiết kế phù hợp với phong cách sống ngày càng năng động. Các thành phần dinh dưỡng có lợi cho cơ thể trong sản phẩm này gồm: protein, canxi, vitamin A, vitamin B1, B2, B6, B12…', N'e7@gmail.com', N'Công Ty TNHH Nabati Việt Nam', N'0953853853', N'20240526-021508-e7.png', N'Thừa Thiên Huế')
INSERT [dbo].[employers] ([approved], [reviewscore], [employerid], [rankid], [address], [background], [description], [email], [employername], [phone], [photo], [provincename]) VALUES (1, 0, 11, 1, N'312 Mai Chí Thọ, Hòa Xuân, Cẩm Lệ', N'nobackground.png', N'Công ty TNHH XNK Phú Thành Phát là nhà Sản Xuất, Nhập Khẩu và Phân Phối các sản phẩm về Địa Kỹ Thuật (vải địa kỹ thuật, lưới địa kỹ thuật, rọ đá, nhựa đường, bấc thấm, màng chống thấm hdpe, …) hàng đầu Việt Nam từ năm 2005. Trong suốt quá trình hoạt động công ty đã tạo được sự tin tưởng tuyệt đối về chất lượng sản phẩm đối cũng như phong cách phục vụ với Chủ Đầu Tư, Các Đơn Vị Thiết Kế và Các Nhà Thầu Thi Công', N'e8@gmail.com', N'Công Ty TNHH Xnk Phú Thành Phát', N'0953853853', N'20240526-021953-e8.png', N'Đà Nẵng')
INSERT [dbo].[employers] ([approved], [reviewscore], [employerid], [rankid], [address], [background], [description], [email], [employername], [phone], [photo], [provincename]) VALUES (1, 0, 12, 1, N'Phan Rang', N'nobackground.png', N'Thưa quý khách hàng, trải qua hơn 10 năm kinh nghiệm hoạt động trong lĩnh vực làm kho lạnh, điện lạnh và điện lạnh công nghiêp, Công Ty Cổ Phần Kỹ Thuật Thương Mại Thuận Phong đã không ngừng phát triển lớn mạnh cả về tầm vóc lẫn quy mô hoạt động bằng sự uy tín và đảm bảo về chất lượng dịch vụ, với đội ngũ kỹ thuật nhiệt tình và chuyên nghiêp sẽ đảm bảo được mọi nhu cầu của quý khách hàng về nhu cầu lắp đặt kho lạnh, lắp đặt hệ thống điện lạnh công nghiệp cho nhà máy, kho, xưởng cũng như điện lạnh dân dụng cho hộ gia đình. Bằng những kinh nghiệm được đúc kết từ nhiều năm và tác phong làm việc chuyên nghiệp, Công Ty Cổ Phần Kỹ Thuật Thương Mại Thuận Phong là đơn vị Tư vấn thiết kế – Thi công lắp đặt – Bảo trì hệ thống điện lạnh công nghiệp hàng đầu đối với các đối tác. Với năng lực sản xuất chất lượng, giá thành cạnh tranh, Thuận Phong đã và đang được nhiều công ty, doanh nghiệp, nhà thầu lựa chọn với ưu điểm: NHANH CHÓNG NHẤT – HIỆU QUẢ NHẤT – TIẾT KIỆM NHẤT. Đảm bảo đáp ứng được số lượng đơn đặt hàng linh hoạt, sản phẩm chất lượng, chi tiết máy phức tạp', N'e9@gmail.com', N'Công Ty Cổ Phần Kỹ Thuật - Thương Mại Thuận Phong', N'0953853853', N'20240526-022529-e9.png', N'Ninh Thuận')
INSERT [dbo].[employers] ([approved], [reviewscore], [employerid], [rankid], [address], [background], [description], [email], [employername], [phone], [photo], [provincename]) VALUES (1, 0, 13, 1, N'22/3A Tân Thới Hiệp 21, KP. 3, P. Tân Thới Hiệp', N'nobackground.png', N'Công Ty TNHH Nệm Thắng Lợi chuyển Sản Xuất Và Kinh Doanh Nệm, Đệm', N'e10@gmail.com', N'Công Ty Tnhh Nệm Thắng Lợi', N'0953853853', N'20240526-023155-e10.png', N'Hà Nội')
INSERT [dbo].[employers] ([approved], [reviewscore], [employerid], [rankid], [address], [background], [description], [email], [employername], [phone], [photo], [provincename]) VALUES (1, 0, 14, 1, N'Sarimi 74 Nguyễn Cơ Thạch, An Lợi Đông, TP Thủ Đức', N'nobackground.png', N'CÔNG TY TNHH PHÁT TRIỂN THƯƠNG MẠI BĐS NEWSTARLAND LÀ ĐƠN VỊ PHÂN PHỐI SỐ 1 CÁC DỰ ÁN BĐS CỦA NHIỀU TẬP ĐOÀN LỚN TRÊN THỊ TRƯỜNG: VIN GROUP, SUN GROUP, FLC... - Trải qua bao biến động, thăng trầm của thị trường bất động sản đầy tiềm năng, thử thách. Với chiến lược phù hợp cùng tư duy quản trị đúng đắn của BLĐ, tinh thần đoàn kết, nỗ lực của nhân sự toàn công ty. Do vậy mà Newstarland đã liên tục gặt hái được thành công và không ngừng phát triển. - Đến nay Newstarland đã phát triển hệ thống trên cả nước với 17 văn phòng và 07 chi nhánh cùng hơn 1000 nhân sự.', N'e11@gmail.com', N'Công Ty TNHH Phát Triển Thương Mại BĐS Newstarland', N'0953853853', N'20240526-023814-e11.png', N'Thành phố Hồ Chí Minh')
INSERT [dbo].[employers] ([approved], [reviewscore], [employerid], [rankid], [address], [background], [description], [email], [employername], [phone], [photo], [provincename]) VALUES (1, 0, 15, 1, N'Tầng 6 tòa nhà Việt á, Số 9 Duy Tân, Phường Dịch Vọng Hậu, Quận Cầu Giấy', N'nobackground.png', N'CÔNG TY TNHH TM DV VÀ KỸ THUẬT ONE VIỆT NAM chuyên hoạt động về lĩnh vực thang máy; chúng tôi chuyên lắp đặt thang máy các hãng OTIS, SIGMA, HUYNDAI,MITSUBISHI.... - Các công trình chúng tôi đã lắp, hoàn thiện và đi vào sử dụng chủ yếu là các công trình lớn có mặt khắp các tỉnh thành như: + Công trình Mường Thanh Lạng Sơn + Công trình tổng hợp khách sạn và chung cư OC2A+B TP Nha Trang + Công trình Khách sạn Mường Thanh Số 04 Trần Phú - Nha Trang + Công Trình chung cư Thanh Hà - Hà Nội + Công Trình Rạp chiếu phim CINESATR Huế - TP Huế + Công trình chung cư Viễn Triều - Nha Trang + Công trình khu tái định cư Đông Hội - Hà Nội, Và rất nhiều công trình nhỏ lẻ khác. Ngoài việc thi công , lắp đặt thang máy chúng tôi có thêm lĩnh lực kinh doanh các dòng thang Nội, Ngoại của tất cả các hãng thang máy nổi tiếng. Là 1 doanh năng động, chúng tôi luôn luôn chào đón những ứng viên tâm huyết, gắn bó lâu dài với công việc và dám thể hiện mình trước những thử thách mà công việc mang lại Địa chỉ : Số 9 Duy Tân, Dịch Vọng, Cầu giấy, HN', N'e12@gmail.com', N'Công Ty TNHH TM DV Và Kỹ Thuật One Việt Nam', N'0953853853', N'20240526-024214-e12.png', N'Hà Nội')
INSERT [dbo].[employers] ([approved], [reviewscore], [employerid], [rankid], [address], [background], [description], [email], [employername], [phone], [photo], [provincename]) VALUES (1, 0, 16, 1, N'Lot G.02B, Street 1, Long Hau Industrial Plant, Can Giuoc District, Long An, Cần Giuộc', N'nobackground.png', N'Tự hào là thành viên của tập đoàn Saint-Gobain – 1 trong 100 tập đoàn Công nghiệp hàng đầu thế giới với 350 năm lịch sử hình thành, Vĩnh Tường giữ vững vị thế nhiều năm liền là nhà tiên phong trong việc cung cấp các giải pháp toàn diện về trần và vách ngăn tại Việt Nam, với các thương hiệu chính bao gồm: Vĩnh Tường, Gyproc, DURAflex.', N'e13@gmail.com', N'Tập Đoàn Saint-Gobain', N'0953853853', N'20240526-024741-e13.png', N'Long An')
INSERT [dbo].[employers] ([approved], [reviewscore], [employerid], [rankid], [address], [background], [description], [email], [employername], [phone], [photo], [provincename]) VALUES (1, 0, 17, 1, N'Số 168/42, đường ĐX006, khu phố 8, Phường Phú Mỹ, Thành phố Thủ Dầu Một, Tỉnh Bình Dương', N'nobackground.png', N'CÔNG TY CỔ PHẦN NÔNG SẢN THỰC PHẨM THÀNH NAM Xin gửi đến Quý khách hàng lời chào thân ái, lời chúc sức khỏe, thành công và thịnh vượng! CÔNG TY CỔ PHẦN NÔNG SẢN THỰC PHẨM THÀNH NAM được thành lập từ năm 2012 với kinh nghiệm hơn 10 năm hoạt động hiện Thành Nam Food đã trở thành một doanh nghiệp có uy tín hàng đầu trong lĩnh vực cung cấp thực phẩm, xuất ăn công nghiệp, thầu nấu tại chỗ cho các nhà máy, xí nghiệp, trường học, bệnh viện …trên địa bàn tỉnh Bình Dương và các tỉnh lân cận. Với mô hình hoạt động khép kín từ Nông Trại đến Bàn Ăn. Xuất phát điểm là một đơn vị chuyên về chăn nuôi từ năm 2000 với: trang trại nuôi heo thịt, trang trại nuôi gà đẻ, gà thịt, chúng tôi đã không ngừng nghiên cứu áp dụng khoa học kỹ thuật để việc phát triển mở rộng quy mô và đa dạng hóa sản phẩm. hiện tại chúng tôi đã phát triển thêm hệ thống trang trại nuôi cá, nuôi vịt, trang trại trồng rau sạch VIETGAP. Với năng xuất cao, chất lượng tốt, giảm tối đa được chi phí giá thành sản xuất, hàng ngày chúng tôi cung cấp ra thị trường hàng chục tấn Trứng, thịt, cá, rau, củ, quả , gia vị, đồ khô, đồ ăn liền … Với nguồn cung sẵn có, ổn định, chi phí giá thành thấp. Chúng tôi đã chọn chiến lược bỏ qua khâu trung gian là các thương lái và đưa trực tiếp sản phẩm nông sản thực phẩm của mình từ Nông Trại đến tận Bàn Ăn của người tiêu dùng, Khách hàng mục tiêu của chúng tôi chính là bếp ăn của các Nhà Máy, Xí Nghiệp, trường học, khách sạn, sân gôl … trên địa bàn tỉnh Bình Dương và các tỉnh lân cận. Đây chính là lý do mà năm 2012 Cty Nông Lâm Sản Thành Nam – Thanh Nam Food được thành lập', N'e14@gmail.com', N'Công Ty Cổ Phần Nông Sản Thực Phẩm Thành Nam', N'0953853853', N'20240526-025134-e14.png', N'Bình Dương')
INSERT [dbo].[employers] ([approved], [reviewscore], [employerid], [rankid], [address], [background], [description], [email], [employername], [phone], [photo], [provincename]) VALUES (1, 0, 18, 1, N'Thôn Phú Đa, xã Hồng Khê, huyện Bình Giang, tỉnh Hải Dương', N'nobackground.png', N'Giới thiệu về công ty : Công ty TNHH RV&RM La Martiniquaise Việt Nam là một công ty liên doanh Việt – Pháp. Được thành lập từ năm 2005 , là một công ty hoạt động trong lĩnh vực sản xuất, đóng chai rượu mạnh.', N'e15@gmail.com', N'Công Ty TNHH Rượu Vang Và Rượu Mạnh La Martiniquaise', N'0953853853', N'20240526-025550-e15.png', N'Hải Dương')
INSERT [dbo].[employers] ([approved], [reviewscore], [employerid], [rankid], [address], [background], [description], [email], [employername], [phone], [photo], [provincename]) VALUES (1, 0, 19, 1, N'CÔNG TY TNHH KOYU & UNITEK, LÔ C8, KCN LONG BÌNH, TP. BIÊN HÒA, ĐỒNG NAI', N'nobackground.png', N'In 2003, a poultry influenza heavily outbroke in Asia, then widely spreaded. Also. Vietnam did not overcome its heavy influence. Actually, this was a great difficulty for the business, production and processing in the field of poultry in Vietnam.', N'e16@gmail.com', N'Công Ty TNHH Koyu & Unitek', N'0953853853', N'20240526-030003-e16.png', N'Đồng Nai')
INSERT [dbo].[employers] ([approved], [reviewscore], [employerid], [rankid], [address], [background], [description], [email], [employername], [phone], [photo], [provincename]) VALUES (1, 0, 20, 1, N'Tầng 6, Tháp B, Tòa nhà Viettel, 285 Cách Mạng Tháng Tám, Phường 12, Quận 10, TpHCM', N'nobackground.png', N'TH Group được thành lập dưới sự tư vấn tài chính của Ngân hàng TMCP Bắc Á. Ngân hàng được thành lập từ năm 1994 tại tỉnh Nghệ An, Việt Nam. Ngoài các lĩnh vực ngân hàng và tư vấn tài chính, Bắc Á Bank còn đầu tư vào các lĩnh vực khác như khai thác mỏ quặng, Cement, lâm nghiệp, thủy điện, bất động sản,… đặc biệt là dự án quy mô lớn trong công nghiệp chăn nuôi bò sữa và chế biến sữa – một dự án được cho là lớn nhất Đông Nam Á hiện nay trong ngành công nghiệp sữa với quy mô vốn lên đến 1.2 tỷ USD.', N'e17@gmail.com', N'Công Ty CP Chuỗi Thực Phẩm Th', N'0953853853', N'20240526-030344-e17.png', N'Thành phố Hồ Chí Minh')
INSERT [dbo].[employers] ([approved], [reviewscore], [employerid], [rankid], [address], [background], [description], [email], [employername], [phone], [photo], [provincename]) VALUES (1, 0, 21, 1, N'Đường TS5 - KCN Tiên Sơn - P. Đồng Nguyên - TX Từ Sơn - Bắc Ninh', N'nobackground.png', N'Vinasoy hiện là công ty dẫn đầu ngành hàng sữa đậu nành bao bì giấy ở Việt Nam với hơn 80% thị phần và đã có mặt tại các nước: Nhật Bản, TQ, Mỹ. Tại Việt Nam, người tiêu dùng biết đến Vinasoy với các sản phẩm như: Fami Canxi, Fami Nguyên Chất, Fami Go, Vinasoy. Ngoài ra, Vinasoy còn được biết đến với các thành tích như: o Top 5 Nhà Sản xuất Sữa Đậu nành lớn nhất thế giới o Thương hiệu Sữa Đậu nành số 1 được chọn mua tại Việt Nam o Top 10 Nhãn hiệu nổi tiếng nhất Việt Nam và cũng là Top 10 DN uy tín nhất Việt Nam o Top 38 DN có nơi làm việc tốt nhất Việt Nam Gần 25 năm hoạt động, VinaSoy đã có những bước phát triển vượt bậc trong ngành hàng tiêu dùng nhanh, Vinasoy không ngừng xây dựng và gìn giữ môi trường làm việc hạnh phúc với sự chuyên nghiệp, sáng tạo trong một tập thể hơn 1.800 cán bộ công nhân viên cùng hợp tác và đồng lòng.', N'e18@gmail.com', N'NHÀ MÁY SỮA ĐẬU NÀNH VINASOY BẮC NINH', N'0953853853', N'20240526-030659-e18.png', N'Bắc Ninh')
INSERT [dbo].[employers] ([approved], [reviewscore], [employerid], [rankid], [address], [background], [description], [email], [employername], [phone], [photo], [provincename]) VALUES (1, 0, 22, 1, N'VP Tổng Công ty CP Tập Đoàn Trần Anh LA - Ấp Mới II, Mỹ Hạnh Nam, Huyện Đức Hòa, Tỉnh Long An', N'nobackground.png', N'- Trần Anh tự hào là một trong những đơn vị đóng góp vào công cuộc xây dựng và phát triển một xã hội thịnh vượng, một cộng đồng nhân văn. Lĩnh vực Tập đoàn hoạt động Tập đoàn Trần Anh là một tập đoàn bất động sản đa năng, chuyên đầu tư và phát triển các dự án khu đô thị, đặc biệt là tập trung phần lớn ở khu vực Tây Bắc Tp.HCM.', N'e19@gmail.com', N'Công Ty Cổ Phần Tập Đoàn Trần Anh Long An', N'0953853853', N'20240526-031100-e19.png', N'Long An')
INSERT [dbo].[employers] ([approved], [reviewscore], [employerid], [rankid], [address], [background], [description], [email], [employername], [phone], [photo], [provincename]) VALUES (1, 0, 23, 1, N'Tòa Văn phòng Symphony (đối diện TTTM Vincom Long Biên), Chu Huy Mân, Phúc Đồng, Long Biên, Hà Nội', N'nobackground.png', N'Được thành lập vào ngày 23/11/2004, đánh dấu bằng sự ra đời của Trung tâm Thương mại đầu tiên tại Hà Nội - Vincom Center Bà Triệu. Vincom là thương hiệu kinh doanh mặt bằng bán lẻ thuộc Tập đoàn Vingroup. Vincom Retail là công ty sở hữu, quản lý và vận hành các trung tâm thương mại Vincom đẳng cấp, quy mô lớn bậc nhất Việt Nam; với quy mô và tốc độ phát triển thần tốc. Được định vị từ trung cấp tới cao cấp, Vincom mang tới cho khách hàng những trải nghiệm về không gian mua sắm - vui chơi giải trí - ẩm thực hiện đại, tiện nghi mang tầm quốc tế; đồng thời, góp phần định hình phong cách tiêu dùng mới cho người dân Việt Nam. Sau hơn 13 năm hoạt động, Vincom đã trở thành biểu tượng hội tụ của mua sắm, giải trí và ẩm thực, là điểm đến yêu thích của mọi gia đình tại những thành phố, khu vực mà Vincom xuất hiện. Hiện nay, Vincom đang quản lý và vận hành 46 trung tâm thương mại trên cả nước với 4 thương hiệu nhánh: Vincom Center, Vincom Mega Mall, Vincom Plaza & Vincom Plus.', N'e20@gmail.com', N'Công Ty Cổ Phần Vincom Retail', N'0953853853', N'20240526-031516-e20.png', N'Hà Nội')
INSERT [dbo].[employers] ([approved], [reviewscore], [employerid], [rankid], [address], [background], [description], [email], [employername], [phone], [photo], [provincename]) VALUES (1, 0, 24, 1, N'Tân Hưng - Tân Châu - Tây Ninh', N'nobackground.png', N'Công ty cổ phần Thành Thành Công - Biên Hòa (TTC - BH) tiền thân là Công ty Cổ phần Mía đường Bourbon Tây Ninh (SBT) được thành lập dựa trên cơ sở liên doanh giữa Tập đoàn Group Bourbon (GB), Liên hiệp Mía đường II (LHMĐ II) và Liên hiệp Mía đường Tây Ninh (LHMĐ TN),theo Giấy phép Đầu tư số 1316/ GP, do Bộ Kế hoạch & Đầu từ cấp ngày 15/07/1995. Năm 2017, TTC - BH hoàn tất việc góp vốn đầu tư vào Công ty TNHH Mía đường TTC Attapeu (tiền thân là Công ty TNHH Mía đường Hoàng Anh Gia Lai). Khoản đầu tư này giúp TTC - BH gia tăng các giá trị cộng hưởng để tiếp tục dẫn đầu ngành đường Việt Nam.', N'e21@gmail.com', N'Công Ty Cổ Phần Thành Thành Công - Biên Hòa', N'0953853853', N'20240526-033629-e21.png', N'Tây Ninh')
INSERT [dbo].[employers] ([approved], [reviewscore], [employerid], [rankid], [address], [background], [description], [email], [employername], [phone], [photo], [provincename]) VALUES (1, 0, 25, 1, N'12/22 Hàm Nghi', N'nobackground.png', NULL, N'nalsolution@gmail.com', N'NAL Solutions', N'0935901493', N'nophoto.png', N'Thừa Thiên Huế')
GO
SET IDENTITY_INSERT [dbo].[follows] ON 

INSERT [dbo].[follows] ([candidateid], [employerid], [followdate], [followid]) VALUES (8, 5, CAST(N'2024-05-26T01:59:23.3660000' AS DateTime2), 3)
INSERT [dbo].[follows] ([candidateid], [employerid], [followdate], [followid]) VALUES (26, 5, CAST(N'2024-05-26T16:15:19.8240000' AS DateTime2), 5)
INSERT [dbo].[follows] ([candidateid], [employerid], [followdate], [followid]) VALUES (27, 5, CAST(N'2024-05-26T16:37:45.8170000' AS DateTime2), 7)
INSERT [dbo].[follows] ([candidateid], [employerid], [followdate], [followid]) VALUES (27, 4, CAST(N'2024-05-26T21:16:04.2460000' AS DateTime2), 13)
SET IDENTITY_INSERT [dbo].[follows] OFF
GO
SET IDENTITY_INSERT [dbo].[industries] ON 

INSERT [dbo].[industries] ([industryid], [industryname]) VALUES (1, N'Công nghệ thông tin')
INSERT [dbo].[industries] ([industryid], [industryname]) VALUES (2, N'Ngân hàng')
INSERT [dbo].[industries] ([industryid], [industryname]) VALUES (3, N'Thương mại điện tử')
INSERT [dbo].[industries] ([industryid], [industryname]) VALUES (4, N'Bưu chính viễn thông')
INSERT [dbo].[industries] ([industryid], [industryname]) VALUES (5, N'Kinh doanh bán hàng')
INSERT [dbo].[industries] ([industryid], [industryname]) VALUES (6, N'Kế toán')
INSERT [dbo].[industries] ([industryid], [industryname]) VALUES (7, N'Bất động sản')
INSERT [dbo].[industries] ([industryid], [industryname]) VALUES (8, N'Khách sạn')
INSERT [dbo].[industries] ([industryid], [industryname]) VALUES (9, N'Bảo hiểm')
INSERT [dbo].[industries] ([industryid], [industryname]) VALUES (10, N'Chăn nuôi - Thú y')
INSERT [dbo].[industries] ([industryid], [industryname]) VALUES (11, N'Nuôi trồng thủy hải sản')
INSERT [dbo].[industries] ([industryid], [industryname]) VALUES (12, N'Dệt may')
INSERT [dbo].[industries] ([industryid], [industryname]) VALUES (13, N'Thời trang')
INSERT [dbo].[industries] ([industryid], [industryname]) VALUES (14, N'Dược phẩm')
INSERT [dbo].[industries] ([industryid], [industryname]) VALUES (15, N'An ninh')
INSERT [dbo].[industries] ([industryid], [industryname]) VALUES (16, N'Quản trị kinh doanh')
SET IDENTITY_INSERT [dbo].[industries] OFF
GO
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T20:31:43.0000000' AS DateTime2), N'00556e4d-931e-474d-aef0-746531256704')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T18:41:42.0000000' AS DateTime2), N'05877a56-b121-45cf-a4cc-08566afb0b46')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T21:06:22.0000000' AS DateTime2), N'05e7cb84-b879-4f27-872b-715d26e0c235')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T13:39:31.0000000' AS DateTime2), N'064623e9-dfb5-43c9-939d-d7e9da943cb1')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T21:22:51.0000000' AS DateTime2), N'06c7bbbc-fd51-424a-8dac-9cafcbf9f150')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T06:05:02.0000000' AS DateTime2), N'087afe90-f887-42c8-b968-e82cf3edfa69')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T15:16:26.0000000' AS DateTime2), N'0946320a-78b1-4005-9616-87179180adb2')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T19:36:02.0000000' AS DateTime2), N'0c0931ac-e77c-40f3-b56e-488ed06a8e08')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T13:51:31.0000000' AS DateTime2), N'0e63db9a-f889-435c-b0e1-9ababb63abe8')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T21:03:13.0000000' AS DateTime2), N'12e9ff5e-d97e-429e-abc3-7dd37b74bb46')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T15:49:01.0000000' AS DateTime2), N'14695a37-dec6-45f3-b86c-6aa24ebdd8ce')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T20:08:42.0000000' AS DateTime2), N'149e7c6b-b3c1-4586-ba2c-0d878c08eacf')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T21:09:43.0000000' AS DateTime2), N'15a51821-2f1a-454d-a8fa-927fcbcdc3b1')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T21:00:21.0000000' AS DateTime2), N'194f48ae-1151-48f0-aba2-412172a3ec2a')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T15:46:18.0000000' AS DateTime2), N'1a4bc550-b5c1-490c-a7e0-72dab351f03e')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T20:51:54.0000000' AS DateTime2), N'1ac6b968-4454-4e90-9d35-27f135f1c5ee')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T19:31:05.0000000' AS DateTime2), N'1b2d35c1-6498-4aee-b962-d9e38f27826c')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T21:29:37.0000000' AS DateTime2), N'1cd85ac5-fe4f-4b60-bd5a-5f479ccea1ee')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T20:16:08.0000000' AS DateTime2), N'1f99a870-02c4-40d1-91a5-ce0b65ad8026')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T02:38:50.0000000' AS DateTime2), N'1fbe426d-7f58-40d4-b8a4-143e1d3258f9')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T06:02:30.0000000' AS DateTime2), N'223fbb21-9399-4c9f-a93f-cc5c81d2753f')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T18:59:45.0000000' AS DateTime2), N'27a76de0-2db7-4b19-826d-e8a7aa200ff1')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T12:59:52.0000000' AS DateTime2), N'2a477d54-dead-4ef6-a5f3-40e769267c9b')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T14:46:03.0000000' AS DateTime2), N'2e0ce89d-da48-4bde-a2b5-f8cafa0b613f')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T21:07:33.0000000' AS DateTime2), N'30055f8c-ea8b-42d6-a45c-6d9ea9b514aa')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T14:55:57.0000000' AS DateTime2), N'30b1e1c1-1d90-4c72-bbad-3e308e0eda75')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T18:19:17.0000000' AS DateTime2), N'365c8286-e7eb-46e3-ae32-fce7e883aa1f')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T05:58:44.0000000' AS DateTime2), N'3666acb9-a43c-4ef0-9e6c-2ee058b48a9a')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T20:57:16.0000000' AS DateTime2), N'39532263-43a9-45fa-8d5e-b7257c8f468b')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T13:46:31.0000000' AS DateTime2), N'3adc9fec-4793-4e4f-8f29-be4139bdba38')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T15:45:56.0000000' AS DateTime2), N'3af5f07e-d773-4a4a-86f8-b53894ad50dd')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T19:31:24.0000000' AS DateTime2), N'3b25277d-80ce-4e0a-991b-92cfcd4a27a7')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T20:17:47.0000000' AS DateTime2), N'3e2c8ed9-db25-4209-8b44-94c6d323287c')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T18:31:22.0000000' AS DateTime2), N'46b8f338-c043-4cd6-9349-39f576906d2e')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T20:34:27.0000000' AS DateTime2), N'48515f62-7304-4cd0-914c-4a954daed05e')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T18:24:27.0000000' AS DateTime2), N'487bed05-5408-4ebd-aa94-801d608048f0')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T15:44:50.0000000' AS DateTime2), N'4becf7a7-9663-40c9-a440-4b90f669139b')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T14:45:58.0000000' AS DateTime2), N'4dd3068f-82d2-4ace-8c4e-0f63ab3149ab')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T21:16:39.0000000' AS DateTime2), N'530ec38c-8194-4663-882d-30002b8c1f29')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T15:37:26.0000000' AS DateTime2), N'5a18c899-4b64-4aee-a42b-9db8f84a9c58')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T06:02:41.0000000' AS DateTime2), N'5bd4be6a-7e72-46e2-a843-cfede9fc5dba')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T15:47:39.0000000' AS DateTime2), N'6421a968-c880-4eaf-9b0a-24dc84d826d0')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T15:46:27.0000000' AS DateTime2), N'64a731df-2650-43ca-900c-cd1cc7f2f18b')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-27T02:18:00.0000000' AS DateTime2), N'66686a7d-73ef-46df-882c-bd8fbbae1e85')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T03:02:15.0000000' AS DateTime2), N'66853be4-f5fd-4d74-ae95-26f269c3ec46')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T20:16:01.0000000' AS DateTime2), N'67fa8e6d-26b2-4a45-a0a6-f54032c87551')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T19:30:48.0000000' AS DateTime2), N'70f2b9e5-0faa-43b0-acc1-97f69263a745')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T13:47:29.0000000' AS DateTime2), N'71451aeb-f5a9-41b2-a82f-2f302e7464d6')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T13:44:15.0000000' AS DateTime2), N'7928c8cc-39cf-4fbe-aead-becef1b317c1')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T18:55:22.0000000' AS DateTime2), N'7b606ca6-d6b0-4e6d-beef-a55efd6e5747')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T19:14:47.0000000' AS DateTime2), N'7e765a93-be62-4308-ae88-6e2bc51ddfc2')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T14:55:06.0000000' AS DateTime2), N'81e69b33-8ae1-49cd-93df-cd7a199f014a')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T19:10:32.0000000' AS DateTime2), N'823c1575-17ad-4679-baf6-e01feff5dd00')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T03:15:29.0000000' AS DateTime2), N'8951be1c-e212-4bd3-a906-f8a719ab78a8')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T18:37:54.0000000' AS DateTime2), N'8ec7e8c6-696b-48c5-9f9d-f7fbae223847')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T15:43:15.0000000' AS DateTime2), N'93fdf634-1d91-44c8-bc12-b3e0df7e3628')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T19:31:43.0000000' AS DateTime2), N'9569f9a7-7de6-4350-bb1a-f55f5975736e')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-27T01:26:39.0000000' AS DateTime2), N'9e664bc2-306b-47f3-9ef1-3850b0d49807')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T06:02:47.0000000' AS DateTime2), N'9fa15890-2110-48f3-b28e-632dd361f774')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T20:13:05.0000000' AS DateTime2), N'a0749631-2248-4023-84f0-3e22b944be08')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T06:02:35.0000000' AS DateTime2), N'a56c1c1c-d176-483a-b2e2-6d280728c3dc')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T03:52:26.0000000' AS DateTime2), N'a572ec24-555c-4e16-8f4f-7645761a8fa3')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T19:32:45.0000000' AS DateTime2), N'a95bf41a-5882-43ef-90d3-f95091bebb8f')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T19:30:31.0000000' AS DateTime2), N'b7aaca2d-3c9c-4b7a-8099-f3aae4f5793a')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T05:31:10.0000000' AS DateTime2), N'bb3a7248-9357-45a5-8036-e0ffb7031111')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T15:22:17.0000000' AS DateTime2), N'bfaba43e-668e-465d-935d-758f7f2e4420')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T03:52:45.0000000' AS DateTime2), N'c11251ec-760b-4d0d-988a-840e7a6a912b')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T19:06:23.0000000' AS DateTime2), N'c4d3325c-1723-4293-88fc-e2952fc4bbbe')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T05:31:30.0000000' AS DateTime2), N'c59a2dd0-7f1e-4f53-ad55-2856349279a4')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T15:48:23.0000000' AS DateTime2), N'c5feabc4-edfc-4182-aa2c-7bd4107fa3c7')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T18:51:13.0000000' AS DateTime2), N'cb5929e1-d8b6-4163-8bad-6a4fc1e736fd')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T06:04:43.0000000' AS DateTime2), N'cbf381f4-0635-4520-b563-031301d65f6a')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T12:37:36.0000000' AS DateTime2), N'd171d172-7664-4833-9893-f6e3785cfc0a')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T20:59:38.0000000' AS DateTime2), N'd2aaf05c-ebeb-42ef-bec8-087c464c72ad')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T19:03:11.0000000' AS DateTime2), N'd5208106-1efe-4440-b9f9-9067611f26b0')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T19:49:07.0000000' AS DateTime2), N'dba2b7d6-aed8-4268-b7e9-034583877812')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-27T02:10:52.0000000' AS DateTime2), N'dce72b7e-f319-48d5-9447-30decbabec83')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T15:00:04.0000000' AS DateTime2), N'ddcc9881-7f40-4acd-80db-5c5c07822df8')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T19:32:27.0000000' AS DateTime2), N'de07802e-8c13-434c-bde0-caba7da88f73')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T18:47:15.0000000' AS DateTime2), N'e0a213fb-5a80-44a1-878c-7333dcc8b6b2')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T20:56:03.0000000' AS DateTime2), N'e0ff13f4-95e8-412f-beda-9f0f63789964')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T19:29:18.0000000' AS DateTime2), N'eb4d788c-01ca-40e3-acfd-ef0acd595052')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T14:59:41.0000000' AS DateTime2), N'ed1da5cb-e1b4-4f12-8dc6-49e926464081')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T18:14:22.0000000' AS DateTime2), N'ef32e2d9-ef1a-46f8-87e8-79a803ab9a9c')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T05:29:32.0000000' AS DateTime2), N'f14fe4d4-ca9c-4c19-8ef8-e540ebcf6563')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T19:30:05.0000000' AS DateTime2), N'f5bf5a34-42f4-48d4-b61f-63b2fcc67589')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T21:12:42.0000000' AS DateTime2), N'f612eab8-60d5-444c-bf3a-efc2d5545d39')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T15:44:42.0000000' AS DateTime2), N'fa766a1a-72ab-4b9b-924c-6c7de509d7f5')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T21:16:59.0000000' AS DateTime2), N'fc59ac6c-0bab-4559-82ab-99976347a1ef')
INSERT [dbo].[invalidatedtoken] ([expiry_time], [id]) VALUES (CAST(N'2024-05-26T03:45:41.0000000' AS DateTime2), N'ff9707ca-9488-47f2-b877-3ce9224de927')
GO
SET IDENTITY_INSERT [dbo].[jobbenefits] ON 

INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (1, 1, N'Lương khởi điểm: 10.000.000 - 15.000.000')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (2, 1, N'Thời gian làm việc: Từ Thứ 2 – Thứ 7 ( 8h -17h )')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (3, 1, N'Chế độ nghỉ phép, nghỉ ngơi theo quy định.')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (4, 1, N'Tham gia đầy đủ BHXH, BHYT, BHTN và các phúc lợi khác theo quy định của Pháp luật')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (5, 1, N'Teambuilding định kỳ')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (27, 2, N'Làm ngoài giờ : cộng thêm 2.000đ/giờ ;')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (28, 2, N'Tăng lương : 01 năm xét tăng lương 01 lần;')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (29, 2, N'Khen thưởng : thưởng các kỳ lễ trong năm, thưởng các thành tích xuất sắc….')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (30, 2, N'Đồng phục : Cấp miển phí / năm.')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (31, 2, N'Nhà ở : có chỗ ở miển phí cho nhân viên ở xa ( tùy mục tiêu)')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (32, 2, N'Cơm : đơn vị chủ quản cho cơm ( tùy mục tiêu) hoặc công ty hỗ trợ tạm ứng tiền ăn 100k / ngày ( làm 5 ngày chi 1 lần)')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (33, 2, N'Bảo hiểm : theo quy chế của công ty ( làm 1 năm trở lên).')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (34, 3, N'Môi trường làm việc chuyên nghiệp, ổn định, năng động. Được tạo điều kiện làm việc ở khu vực gần nhà.')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (35, 3, N'Được đào tạo bài bản, luôn có cơ hội phát triển bản thân.')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (36, 3, N'Khen thưởng: Lương tháng 13 và thưởng thi đua, thưởng đột xuất, thưởng TOP nhân viên xuất sắc của năm.')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (37, 3, N'Chế độ nghỉ mát, teambuilding hàng năm.')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (38, 3, N'Chế độ bảo hiểm: BHYT, BHXH, BHTN, BH tai nạn 24/24, khám sức khỏe định kỳ và an toàn lao động.')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (39, 3, N'Đặc biệt chính sách bảo hiểm PNC Care dành riêng cho CBNV Phương Nam.')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (40, 3, N'Nghỉ phép và các chế độ khác: Theo Luật Lao động Việt Nam và Quy định tài chính của công ty.')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (41, 3, N'Thuộc biên chế công ty TNHH MTV DV Viễn thông Phương Nam (Đối tác độc quyền của FPT Telecom)')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (52, 5, N'Mức lương khởi điểm: 8 -12 triệu đồng/tháng')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (53, 5, N'Lương + Thu nhập theo kết quả công việc')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (54, 5, N'Thưởng Lễ, Tết, Lương tháng 13,…theo quy định (Thưởng tối thiểu từ 5 – 7 tháng lương)')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (55, 5, N'Chế độ BHXH, BHTY, BHTN, bảo hiểm mở rộng PVI, các phúc lợi khác,…')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (56, 5, N'Có nhà ở miễn phí cho Nhân viên ở xa')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (91, 6, N'Thu nhập cố định: 18.000.000 - 36.000.000 VND/Tháng')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (92, 6, N'Hoa hồng từ 15 - 25% Doanh số, Thưởng tháng/ quý/ năm.')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (93, 6, N'Phụ cấp cố định: 1.800.000 VND/Tháng')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (94, 6, N'Hỗ trợ thu nhập trong 2 tuần đào tạo đầu tiên: 3.000.000 VND.')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (95, 6, N'Thu nhập không giới hạn: các khoảng thưởng hoa hồng mỗi tháng lên đến hàng trăm triệu đồng.')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (96, 6, N'Được làm việc trong môi trường hiện đại, đầy sức sáng tạo')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (97, 6, N'Được tham gia các khóa đào tạo chuyên nghiệp với lộ trình thăng tiến và phát triển năng lực rõ ràng')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (98, 6, N'Được cung cấp thẻ chăm sóc sức khỏe hằng năm')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (99, 6, N'Được hỗ trợ chi phí F&B tiếp khách tại văn phòng')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (100, 6, N'Được cung cấp IPAD để phục vụ cho công việc')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (101, 6, N'Được du lịch trong nước và ngoài nước')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (102, 6, N'Làm việc 9h-16h từ Thứ 2 - Thứ 6 (Nghỉ T7, CN ).')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (103, 10, N'Lương= Lương cứng 7 triệu + thưởng theo tỉ lệ hoàn thành KPIs. Thu nhập trung bình: 10 - 30 triệu/ tháng')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (104, 10, N'Thử việc 2 tháng nhận Full 100% lương cứng+KPI')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (105, 10, N'Môi trường làm việc chuyên nghiệp, năng động, miễn phí gửi xe')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (106, 10, N'Được đóng BHXH, BHYT và hưởng đầy đủ các chế độ theo luật lao động')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (107, 10, N'Tham gia các hoạt động nội bộ: Tổ chức sinh nhật hàng tháng, Tiệc Noel,...')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (108, 10, N'Quà tặng sinh nhật, các dịp lễ Tết cho Nhân Viên và Gia Đình (8/3 , 1/6, 20/10, Trung thu,...)')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (125, 11, N'Làm việc trong môi trường chuyên nghiệp. (Top 10 công ty có môi trường làm việc tốt nhất Việt Nam do Alphabet bình chọn)')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (126, 11, N'Chế độ thu nhập chi trả xứng đáng với nỗ lực, cống hiến (có bổ sung các khoảng thưởng Quý, Năm)')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (127, 11, N'Cơ cấu, nhiệm vụ Phòng/ Ban rõ ràng, lĩnh vực công việc chuyên môn sâu (đối với các bạn sinh viên mới, Bò Sữa sẵn sàng đào tạo, hướng dẫn, miễn là các bạn nhiệt huyết với công việc, khao khát học hỏi, nâng cao năng lực chuyên môn.')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (128, 11, N'Nếu ứng viên đã cứng nghiệp vụ => giao nhiệm vụ thực hiện ngay, phạm vi công việc bao quát toàn lãnh thổ Việt Nam)')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (129, 11, N'Hiện tại quy mô Công ty Bò Sữa VN đang mở rộng (vừa mở rộng trang trại chăn nuôi, vừa nâng cao phạm vi/ công nghệ sản xuất) => cơ hội thăng tiến còn nhiều phía trước,')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (130, 11, N'Các hoạt động phong trào, công đoàn thường xuyên được tổ chức => tạo sân chơi cho mọi người gắn kết (Hội thao, Văn nghệ, Thi sáng tạo, Tất niên, 8/3, 20/10, sinh nhật, ...)')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (131, 11, N'Hằng năm Bò Sữa VN lên Kế hoạch đào tạo, cập nhật các kiến thức, kỹ thuật mới => nâng cao dần năng lực => tạo nguồn nhân sự cốt lõi/ Hoặc các cá nhân chủ động đăng ký các chương trình đào tạo => tạo bước đà cho sự thăng tiến cá nhân)')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (132, 11, N'Bổ sung bảo hiểm PVI sau khi đạt Thử việc, lên cấp quản lý bổ sung bảo hiểm PVI cho cả người thân')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (133, 12, N'Thu nhập trung bình từ 11-15 triệu.')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (134, 12, N'Là nhân viên chính thức & được hưởng đầy đủ phúc lợi của Công ty.')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (135, 12, N'Thử việc 2 tháng. Sau thử việc được tham gia BHXH, BHTN, bảo hiểm y tế, bảo hiểm 24/24 (công ty chi trả 100% chi phí)')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (136, 12, N'Lương tháng 13 & xem xét tăng lương hàng năm')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (137, 12, N'Cơ hội thăng tiến, đào tạo kĩ năng phát triển nghề nghiệp.')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (138, 12, N'Thời gian làm việc: Giờ hành chính từ 07h30 - 17h00 từ thứ 2 đến thứ 7. Nghỉ trưa 90 phút')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (139, 13, N'Thu nhập không giới hạn bao gồm: Lương cơ bản từ 8-10 Triệu + Hoa hồng (Thỏa thuận theo kinh nghiệm và năng lực)')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (140, 13, N'Thời gian làm việc: từ thứ 2 đến sáng thứ 7 ( từ 7h30 - 11h30 và 13h - 17h )')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (141, 13, N'Phụ cấp điện thoại, công tác phí')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (142, 13, N'Tham gia đầy đủ các chính sách BHXH theo quy định, phúc lợi của công ty')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (143, 13, N'Được đào tạo, được cử tham gia các khóa học nâng cao nghiệp vụ')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (144, 13, N'Có cơ hội phát triển nghề nghiệp.')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (145, 14, N'Lương cơ bản từ 12 – 16 triệu/tháng + phụ cấp + thưởng, theo đúng năng lực khi phỏng vấn')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (146, 14, N'Được tham gia BHXH, BHYT, BHTN theo quy định của luật lao động.')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (147, 14, N'Được hưởng đầy đủ các chế độ du lịch, ốm đau, sinh nhật, hiếu hỷ… theo chính sách phúc lợi của công ty.')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (148, 14, N'Được đào tạo và làm việc trong công ty có quy mô, công nghệ hiện đại nên rất thuận lợi trong việc nâng cao trình độ chuyên môn và kinh nghiệp làm việc.')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (149, 14, N'Môi trường làm việc chuyên nghiệp, năng động, thân thiện')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (150, 14, N'Nhiều cơ hội thăng tiến và phát triển tại Công ty. - Công việc ổn định và lâu dài.')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (151, 14, N'Mức lương có thể được điều chỉnh tùy theo năng lực của ứng viên')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (152, 15, N'Thu nhập hấp dẫn xứng đáng theo năng lực: lương cơ bản 9 triệu + phụ cấp 2 triệu + hoa hồng…')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (153, 15, N'Được nhận 100% lương trong quá trình thử việc! (>11tr)')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (154, 15, N'Phụ cấp chi phí công tác tỉnh 350,000/ngày')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (155, 15, N'Được hưởng các nhiều quyền lợi của công ty')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (156, 15, N'Môi trường làm việc thân thiện')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (157, 15, N'Có cơ hội thăng tiến lên vị trí cao hơn')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (158, 16, N'Thu nhập: Lương cơ bản + Phụ cấp + Hoa hồng kinh doanh + Thưởng nóng')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (159, 16, N'THU NHẬP HẤP DẪN 20-100 TRIỆU (Thu nhập không giới hạn )')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (160, 16, N'Thử việc: 2 tháng (Ngay khi phát sinh giao dịch thành công sẽ kết thúc thời gian thử việc và nhận lương chính thức).')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (161, 16, N'Áp dụng lương cơ bản duy trì trong 6 tháng tiếp theo chưa phát sinh giao dịch.')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (162, 16, N'Cơ hội đào tạo chuyên sâu (kỹ năng tư vấn, chăm sóc khách hàng, các kỹ năng trong lĩnh vực truyền thông, kinh doanh, marketing, bất động sản...).')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (163, 16, N'Hỗ trợ MKT và data khách.')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (164, 16, N'Lộ trình thăng tiến rõ ràng.')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (165, 16, N'Các hoạt động tập thể thường xuyên: Teambuilding, Bóng đá,...')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (179, 19, N'Mức lương hấp dẫn thỏa thuận theo năng lực: Lương cứng 6-10 triệu + hoa hồng + phụ cấp. (thu nhập có thể lên đến 50 triệu).')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (180, 19, N'Môi trường làm việc năng động, thân thiện, không ngừng phát triển')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (181, 19, N'Lương thưởng tháng 13, xét tăng lương hàng năm.')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (182, 19, N'Được tham gia đầy đủ các chế độ BHXH, phúc lợi theo quy định')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (183, 20, N'Mức lương khởi điểm từ 10,000,000 trở lên tùy năng lực và kinh nghiệm')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (184, 20, N'Hỗ trợ ăn trưa, tặng quà nhân ngày sinh nhật, ngày 8/3, 20/10.')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (185, 20, N'Làm việc giờ hành chính. Được nghỉ Chủ Nhật')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (186, 20, N'Làm việc trong môi trường chuyên nghiệp, năng động, thân thiện')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (187, 20, N'Được đóng BHYT, BHXH, BHTN theo quy định của luật lao động')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (188, 20, N'Được thưởng Lễ, Tết, theo quy định của nhà nước')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (189, 20, N'Du lịch hàng năm.')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (190, 21, N'Được tham hưởng đầy đủ các chế độ BHXH theo quy định')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (191, 21, N'Được hưởng lương tháng 13')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (192, 21, N'Được bồi dưỡng hàng ngày bằng hiện vật (sữa, bánh ngọt...)')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (193, 21, N'14 ngày phép/năm')
GO
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (194, 21, N'Làm việc trong môi trường năng động, chuyên nghiệp, có cơ hội phát triển')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (195, 22, N'Thu nhập từ 8-12 triệu (Thử việc nhận 100% Lương) + Chế độ bảo hiểm đầy đủ')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (196, 22, N'Được đào tạo các kiến thức và kỹ năng liên quan')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (197, 22, N'Môi trường làm việc năng động, thân thiện và chuyên nghiệp')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (207, 24, N'Thu nhập từ 13 - 25 triệu, theo quy mô dự án, tỷ lệ cư dân về ở và tỷ lệ thu phí thành công.')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (208, 24, N'Thưởng nhân các ngày Lễ/Tết theo quy định của Nhà nước')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (209, 24, N'Thưởng thành tích định kỳ và đột xuất cho cá nhân hoặc tập thể;')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (210, 24, N'Thưởng sáng kiến cải tiến kỹ thuật, nâng cao hiệu quả hoạt động kinh doanh;')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (211, 24, N'Thưởng lương theo chế độ Tập Đoàn;')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (212, 24, N'Các khoản trợ cấp: Kết hôn, tang chế, ốm đau, thai sản, cơm trưa, gửi xe, liên lạc, xăng, công tác, giao tế, đồng phục;')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (213, 24, N'Nhiều hoạt động văn hóa, văn nghệ, thể thao, xã hội dành cho CBNV;')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (214, 24, N'Chế độ phép năm theo quy định của Luật Lao Động.')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (215, 24, N'Các chế độ khác được quy định trong Thỏa Ước Lao Động, Chính sách phúc lợi và các thỏa thuận khác.')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (246, 18, N'Làm việc trong môi trường hiện đại của Công ty đa quốc gia')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (247, 18, N'Đào tạo kiến thức thực chiến và có cơ hội tham gia các dự án cải tiến.')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (248, 18, N'Nhận mức thu nhập Kỹ sư và chế độ đãi ngộ hấp dẫn')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (249, 18, N'Cơ hội phát triển nghề nghiệp rộng khắp tại các nhà máy trên toàn quốc')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (250, 17, N'Thu nhập : 8.000.000 -18.000.000vnđ / tháng')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (251, 17, N'Mức lương theo tay nghề được xét 1 lần / năm. Trường hợp làm tốt sẽ được xét 2 lần / năm')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (252, 17, N'Ngoài mức lương trên, người lao động được hưởng thêm các quyền lợi sau:')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (253, 17, N'Phụ cấp ăn 100.000vnđ / ngày làm việc không phân biệt xa gần , có nhà ở khi đi làm, đi lại công ty thanh toán')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (254, 17, N'Phụ cấp khi cấp trên phân công nhiệm vụ,di chuyển, khảo sát công trình… người lao động được nhận 30%/ ngày công + 100.000vnđ tiền ăn / ngày')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (255, 17, N'Được cấp trang phục bảo hộ lao động : giày, quần áo 2 lần / năm , mũ bảo hộ 01 lần / năm')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (256, 17, N'Được làm việc trong môi trường phù hợp với năng lực làm việc và chuyên môn . Hưởng lương theo năng lực, có thể đàm phán tăng lương nếu thấy mình làm tốt')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (257, 17, N'Được đóng bảo hiểm xã hội đầy đủ theo quy định')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (258, 17, N'Chế độ nghỉ mát - du lịch hàng năm . Thưởng lễ, tết, hiệu quả công việc và theo chế độ công ty')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (259, 23, N'Được làm việc tại môi trường chuyên nghiệp với các trang thiết bị hiện đại hàng đầu thế giới; có cơ hội học hỏi kỹ thuật từ Tập đoàn Tetrapak - Thụy Điển và thăng tiến lên vị trí cao hơn trong nghề')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (260, 23, N'Lương cạnh tranh hấp dẫn và thương lượng lương trong quá trình phỏng vấn.')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (261, 23, N'Thưởng đánh giá thực hiện công việc hàng tháng.')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (262, 23, N'Phụ cấp cơm 30.000đ/ngày + Phụ cấp sữa cho nhân viên+Phụ cấp ca đêm = 35% lương ngày.')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (263, 23, N'Thu nhập tăng phụ thuộc vào năng lực và kết quả công việc hàng năm;')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (264, 23, N'Tham gia các chương trình đào tạo phát triển kỹ năng chuyên môn, kỹ năng mềm được tổ chức hàng năm')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (265, 23, N'BHXH, BHYT, BHTN theo Bộ Luật Lao động;')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (266, 23, N'Tham quan, nghỉ mát, sinh nhật, thăm hỏi, tặng quà ....')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (267, 23, N'Thưởng 1/2 tháng lương các ngày Lễ lớn 30/4; 1/5; 2/9 và tháng lương 13 cuối năm, thưởng hiệu suất công việc.')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (268, 25, N'Cung cấp Bảo hiểm Xã hội, Bảo hiểm Y tế, Bảo hiểm Thất nghiệp full lương thực tế')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (269, 25, N'Chế độ lương, thưởng hấp dẫn')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (270, 25, N'Có cơ hội thăng tiến lên các vị trí quản lý cấp trung và cấp cao')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (271, 25, N'Trang bị đồng phục và dụng cụ làm việc')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (272, 25, N'Hưởng các chính sách phúc lợi, ưu đãi của Tập đoàn Vingroup')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (273, 25, N'Làm việc trong môi trường năng động, chuyên nghiệp và hiệu quả')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (274, 26, N'Công ty phụ trách chi phí và các thủ tục xuất, nhập cảnh, lao động tại nước ngoài.')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (275, 26, N'Hỗ trợ nhà công vụ, các điều kiện sinh hoạt cho người lao động.')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (276, 26, N'Hỗ trợ ăn ở, sinh hoạt tại Công ty.')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (277, 26, N'Thu nhập ổn định, phụ cấp làm việc tại nước ngoài.')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (278, 26, N'Thưởng thu nhập tháng 13 và thưởng định kỳ theo chế độ chung của Công ty.')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (279, 26, N'Công ty cử Chuyên gia, Quản lý đào tạo trực tiếp thông qua công việc.')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (280, 26, N'Tham gia đầy đủ các chế độ (BHYT, BHTN, BHXH, BHTN) theo quy định, BHTN 24/24.')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (281, 26, N'Về thăm gia đình định kỳ .')
INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (282, 26, N'Môi trường làm việc thân thiện, chuyên nghiệp.')
SET IDENTITY_INSERT [dbo].[jobbenefits] OFF
GO
SET IDENTITY_INSERT [dbo].[jobdescriptions] ON 

INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (1, 1, N'Lập kế hoạch và giám sát về Sức khỏe, An toàn và Môi trường cũng như tuân thủ tiêu chuẩn an toàn lao động tại công trình.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (2, 1, N'Lập hồ sơ, kế hoạch, biện pháp, tài liệu về Sức khỏe, An toàn và Môi trường của công ty, dự án, khách hàng theo yêu cầu.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (3, 1, N'Đánh giá, giám sát và lập các biện pháp ngăn ngừa, đánh giá rủi ro về An toàn, Sức khỏe và Môi trường.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (4, 1, N'Tương tác, làm việc với Khách hàng về các vấn đề An toàn, Sức khỏe, Môi trường làm việc và lập các báo cáo, hồ sơ theo yêu cầu.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (5, 1, N'Theo dõi, quản lý và giám sát việc sử dụng vật tư, trang thiết bị an toàn, tình trạng để phát hiện kịp thời nguy cơ tai nạn.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (6, 1, N'Lập và chuẩn bị các nội dung đào tạo về An toàn, Sức khỏe, Môi trường.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (7, 1, N'Tổ chức đào tạo, thuyết trình thường xuyên cho CBNV về các vấn đề sức khỏe, an toàn, phòng ngừa tai nạn, môi trường làm viêc.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (8, 1, N'Thực hiện diễn tập và kế hoạch ứng phó xử lý các tình huống khẩn cấp.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (9, 1, N'Đánh giá, kiểm tra quá trình thực hiện các quy định, nội quy an toàn của CBNV theo yêu cầu của Công ty, khách hàng tại công trường bằng cách theo sát, kiểm tra.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (10, 1, N'Điều tra các vụ tai nạn hoặc sự cố để tìm ra nguyên nhân và xử lý các yêu cầu bồi thường.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (11, 1, N'Thực hiện các nhiệm vụ và trách nhiệm khác theo sự phân công của quản lý.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (24, 2, N'Đảm bảo an ninh trật tự, duy trì nội quy nơi làm việc, xử lý các vụ việc liên quan đến an ninh trật tự và vi phạm nội quy xảy ra trong phạm vi vị trí trực;')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (25, 2, N'Đảm bảo tài sản được giao trong khu vực;')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (26, 2, N'Thực hiện công tác PCCC và CHCN trong khu vực được giao.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (27, 2, N'Thời gian làm việc : làm việc theo ca, tăng ca khi có yêu cầu. Ca 12 tiếng/ngày ( ca cố định ngày, ca cố định đêm, ca 24h nghỉ 24h, hoặc xoay ca)')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (28, 3, N'Lắp đặt đường truyền internet, truyền hình, camera, thiết bị phát wifi… do FPT Telecom cung cấp đến khách hàng.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (29, 3, N'Khắc phục các sự cố đường truyền internet, truyền hình, camera, thiết bị phát wifi… do FPT Telecom cung cấp.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (30, 3, N'Chăm sóc khách hàng tại nhà.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (31, 3, N'Bảo quản hạ tầng viễn thông.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (32, 3, N'Thực hiện các công việc khác theo yêu cầu của trưởng bộ phận.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (63, 5, N'Nhân viên Điều trị:')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (64, 5, N'Theo dõi sức khỏe toàn đàn bò/bê trong Trang trại.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (65, 5, N'Tham gia tiêm phòng, hội chẩn, lên phát đồ điều trị bò/bê ốm.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (66, 5, N'Thực hiện các công việc phòng bệnh cho bò/bê.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (67, 5, N'Nhân viên Phối giống – Sinh sản:')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (68, 5, N'Thực hiện theo dõi, phát hiện, khám bò động dục và phối giống, xử lý sinh sản cho bò.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (69, 5, N'Thực hiện khám thai cho bò.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (70, 5, N'Thực hiện đỡ đẻ, hộ lý bò sau đẻ theo đúng hướng dẫn, quy trình, quy định của Công ty/ Trang trại.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (71, 5, N'Khám kiểm tra và hội chẩn cho các cá thể bò chậm sinh.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (92, 6, N'Tư vấn các kế hoạch tài chính bảo hiểm tối ưu cho khách hàng')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (93, 6, N'Tìm kiếm, xây dựng và duy trì mối quan hệ với khách hàng')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (94, 6, N'Thực hiện các thủ tục ký kết hợp đồng với khách hàng')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (95, 6, N'Công việc chi tiết trao đổi khi phỏng vấn')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (96, 10, N'Gọi ra theo data có sẵn được công ty cung cấp 100%, tư vấn sản phẩm cho khách hàng.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (97, 10, N'100% làm việc tại văn phòng, không đi thị trường')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (98, 10, N'Chăm sóc và giải đáp thắc mắc cho khách hàng.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (99, 10, N'Đảm bảo chỉ tiêu theo ngày/ tuần/ tháng.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (108, 11, N'Tham gia ban quản lý các dự áp cấp công ty, thực hiện triển khai các hạng mục được phân công (các giai đoạn từ tìm hiểu giải pháp – thủ tục đấu thầu, triển khai thực hiện hợp đồng, nghiệm thu bàn giao cho đơn vị sử dụng).')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (109, 11, N'Theo dõi, kiểm tra, giám sát việc thực hiện kế hoạch sửa chữa, bảo trì bảo dưỡng máy móc thiết bị tại các trang trại.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (110, 11, N'Triển khai khảo sát tình trạng công nghệ thiết bị, tham gia xây dựng định mức sản lượng, sử dụng năng lượng, vật tư phụ tùng. Phối hợp với các Trang trại thực hiện chương trình an toàn sử dụng máy móc thiết bị, tiết kiệm năng lượng và bảo vệ môi trường.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (111, 11, N'Tiếp nhận thông tin về các sự cố, các công việc kỹ thuật phát sinh từ hoạt động sản xuất hằng ngày hoặc hạng mục đầu tư từ các trang trại, hỗ trợ hướng dẫn phương án xử lý, hoặc trực tiếp tham gia xử lý tại trang trại cho đến khi hoàn thành.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (112, 12, N'Ghé thăm các cửa hiệu thuộc tuyến bán hàng được phân công (chăm sóc và lên đơn hàng)')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (113, 12, N'Giới thiệu chương trình Khuyến mãi cho khách hàng & trưng bày sản phẩm')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (114, 12, N'Cập nhật lại MCP/ danh sách cửa hiệu để chuẩn hóa tuyển bán hàng')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (115, 12, N'Chịu trách nhiệm doanh số theo địa bàn phân công.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (116, 12, N'Có kho/ Văn phòng ở các quận cho Nhân viên tiện di chuyển')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (117, 13, N'Phát triển thị trường và khách hàng mới')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (118, 13, N'Tiếp nhận và xử lý đơn hàng, làm báo giá và đàm phán đi đến ký kết hợp đồng với khách hàng..')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (119, 13, N'Hỗ trợ, chăm sóc, duy trì và phát triển mối quan hệ với khách hàng về lâu dài.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (120, 13, N'Theo dõi tình hình thanh toán và công nợ của đơn hàng/hợp đồng/khách hàng.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (121, 13, N'Trực tiếp giải quyết khiếu nại của khách hàng.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (122, 13, N'Tương tác, hỗ trợ các bạn trong đội nhóm.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (123, 13, N'Báo cáo công việc tuần, tháng.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (124, 13, N'Thực hiện các công việc theo sự phân công của cấp trên.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (125, 14, N'Tiếp nhận thông tin khách thuê từ Công ty.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (126, 14, N'Khảo sát hiện trạng công trình, hướng dẫn thiết kế, thi công, đăng ký thi công.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (127, 14, N'Hướng dẫn khách làm các giấy tờ liên quan đến thi công.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (128, 14, N'Giám sát và theo dõi quá trình thi công.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (129, 14, N'Nghiệm thu công trình.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (130, 14, N'Hoàn tất hồ sơ bàn giao.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (131, 15, N'Gặp gỡ khách hàng, bán hàng (nệm) theo tuyến do quản lý chỉ định hằng ngày.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (132, 15, N'i công tác liên tỉnh khi cần (Được hỗ trợ chi phí)')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (133, 16, N'Tìm kiếm, khai thác khách hàng có nhu cầu về Bất động sản (Đối tác chiến lược của các thương hiệu lớn: VINHOMES , SUN GROUP, CAPITAL LAND, NAM LONG, Dự án New Vegas của Tập đoàn tại Hà Tiên')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (134, 16, N'Tư vấn, giải đáp những thắc mắc của khách hàng về sản phẩm, thủ tục mua bán trong quá trình chăm sóc khách hàng; chăm sóc khách hàng theo chương trình của Công ty.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (135, 16, N'Cập nhật kiến thức về sản phẩm, kỹ năng bán hàng, quảng bá hình ảnh công ty đến khách hàng một cách chuyên nghiệp.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (141, 19, N'Tìm kiếm khách hàng mới, chăm sóc và duy trì tốt mối quan hệ với khách hàng cũ.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (142, 19, N'Giới thiệu sản phẩm đến khách hàng, chốt đơn và ký kết hợp đồng với khách hàng...')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (143, 19, N'Theo dõi tiến trình đơn hàng và phối hợp với các bộ phận liên quan để hoàn thành đơn hàng.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (144, 19, N'Thực hiện các nhiệm vụ khác do cấp trên giao.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (145, 19, N'Chi tiết cụ thể trao đổi khi phỏng vấn.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (146, 20, N'Thực hiện việc chuẩn bị các mẫu thử và các thủ tục phân tích nhằm đo lường định lượng lý hóa của các sản phẩm đồ uống.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (147, 20, N'Thực hiện công việc pha chế rượu cùng với kỹ sư người nước ngoài theo đúng quy định đã ban hành.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (148, 20, N'Kiểm tra đảm bảo chất lượng của sản phẩm và nguyên vật liệu đầu vào theo quy định')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (149, 20, N'Giám sát quy trình sản xuất')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (150, 20, N'Vận hành và bảo trì các thiết bị phân tích cơ bản và những thiết bị đo đạc được thiết kế đặc biệt cho công việc phân tích thực phẩm.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (151, 20, N'Làm các công việc theo yêu cầu của ban Giám Đốc')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (152, 21, N'Nhận kế hoạch hàng ngày triển khai xuống line sản xuất')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (153, 21, N'Giám sát, kiểm tra chính xác đơn hàng, số lượng, chất lượng sản phẩm')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (154, 21, N'Giám sát và hướng dẫn đội, nhóm tuân thủ theo tiêu chuẩn FSSC 22000,…')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (155, 21, N'Đào tạo, hướng dẫn, sắp xếp công việc cho người mới')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (156, 21, N'Thực hiện báo cáo: Tiến độ sản xuất, chất lượng, nguyên vật liệu')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (157, 21, N'Thực hiện các công việc khác theo sự phân công của cấp trên')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (158, 22, N'Chịu trách nhiệm thực hiện các công việc được giao nhằm đảm bảo hoạt động hàng ngày của cửa hàng.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (159, 22, N'Quản lý chi phí bằng cách kiểm soát hàng tồn kho và hoạt động hàng ngày của cửa hàng.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (160, 22, N'Đảm bảo dịch vụ chăm sóc khách hàng đạt chất lượng cao nhất, đồng thời xử lý hiệu quả các phản ánh từ phía khách hàng.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (161, 22, N'Đảm bảo việc quản lý hàng tồn kho và công tác bán hàng trong cửa hàng thống nhất với tiêu chí của công ty.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (162, 22, N'Nhận diện và phát triển khách hàng tiềm năng.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (163, 22, N'Nâng cao doanh thu của cửa hàng.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (169, 24, N'Quản lý toàn diện dự án và chịu trách nhiệm với BGĐ và pháp luật về những việc làm của mình')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (170, 24, N'Quản lý thủ tục hành chính, nhân sự, chăm sóc khách hàng')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (171, 24, N'Quản lý dịch vụ an ninh, các nhà thầu khác')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (172, 24, N'Quản lý tài sản')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (173, 24, N'Quản lý hệ thống hạ tầng kỹ thuật, hệ thống PCCC')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (174, 24, N'Báo cáo theo yêu cầu cấp trên')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (175, 24, N'Tạo mối quan hệ tốt đẹp với dân cư trong dự án')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (176, 24, N'Thu phí quản ký dịch vụ và các loại phí khác do BGĐ quy định')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (177, 24, N'Đề xuất tham mưu cho ban vận hành các chương trình kích cầu thông qua việc làm tăng giá trị cảm nhận về sản phẩm, thương hiệu')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (178, 24, N'Thực hiện đúng quy chế, quy trình, quy định Công ty')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (179, 24, N'Thực hiện các công việc khác theo chỉ đạo cấp trên')
GO
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (204, 18, N'Thực hiện dự án cải tiến cho nhà máy: Máy ép thủy lực, Khí nén, Hệ thống bơm (Vữa, chân không), Máy kéo, Máy nghiền cát, giấy, Vít tải, băng tải,..')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (205, 18, N'Lắp đặt thiết bị máy móc, dây chuyền sản xuất.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (206, 18, N'Hỗ trợ kỹ thuật viên bảo trì để giải quyết sự cố cơ học.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (207, 17, N'Thi công, lắp đặt thang máy & hệ thống điều khiển thang máy của các hãng otis, huyndai, hitachi,thyssen... tại công trình')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (208, 17, N'Làm việc tại công trường, Làm bên trong mát mẻ, không bị nắng')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (209, 23, N'Thực hiện vận hành thiết bị đúng quy trình, hướng dẫn và đảm bảo quá trình sản xuất an toàn, ổn định chất lượng sản phẩm theo tiêu chuẩn.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (210, 23, N'Thực hiện chuẩn bị vật tư hoặc dụng cụ hỗ trợ đảm bảo đúng chủng loại, số lượng, chất lượng vật tư đáp ứng tiến độ sản xuất và chất lượng sản phẩm.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (211, 23, N'Nắm bắt và xử lý các sự cố trong quá trình sản xuất đảm bảo An toàn thực phẩm')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (212, 23, N'Thực hiện các nhiệm vụ khác khi được phân công')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (213, 23, N'Làm việc theo ca.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (214, 25, N'Thực hiện công việc vệ sinh, dọn dẹp khu vực được phân công tại các trung tâm thương mại, siêu thị, tòa nhà thuộc hệ thống Vincom')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (215, 25, N'Giữ gìn công cụ dụng cụ làm việc gọn gàng, sạch sẽ, đúng nơi quy định.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (216, 25, N'Tự quản lý dụng cụ vật tư, hóa chất, tài sản được phân công.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (217, 25, N'Công việc chi tiết trao đổi thêm khi tham gia phỏng vấn.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (218, 26, N'Lập kế hoạch và tổ chức khám sức khỏe định kỳ, khám phát hiện bệnh nghề nghiệp, khám bệnh theo quy định đặc thù của ngành nghề kinh doanh của Công ty.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (219, 26, N'Lập kế hoạch và tổ chức huấn luyện vệ sinh lao động, sơ cấp cứu và vệ sinh an toàn thực phẩm.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (220, 26, N'Tham mưu đề xuất với TBP, Ban lãnh đạo biện pháp chăm sóc sức khỏe cho người lao động.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (221, 26, N'Kiểm tra mua sắm, bảo quản trang thiết bị, thuốc men phục vụ kịp thời việc khám chữa bệnh cho CBNV.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (222, 26, N'Kiểm soát An toàn vệ sinh thực phẩm nhà ăn, thực hiện lưu mẫu thực nghiệm thức ăn hàng ngày.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (223, 26, N'Khám sức khỏe và phát thuốc cho CBNV công ty đối với các ca bệnh đơn giản.')
INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (224, 26, N'Thực hiện các nhiệm vụ khác theo phân công của phụ trách trực tiếp.')
SET IDENTITY_INSERT [dbo].[jobdescriptions] OFF
GO
SET IDENTITY_INSERT [dbo].[jobinterests] ON 

INSERT [dbo].[jobinterests] ([candidateid], [interestdate], [jobid], [jobinterestid]) VALUES (8, CAST(N'2024-05-26T02:02:03.8960000' AS DateTime2), 3, 2)
INSERT [dbo].[jobinterests] ([candidateid], [interestdate], [jobid], [jobinterestid]) VALUES (27, CAST(N'2024-05-26T16:37:44.2590000' AS DateTime2), 11, 5)
SET IDENTITY_INSERT [dbo].[jobinterests] OFF
GO
SET IDENTITY_INSERT [dbo].[jobrequirements] ON 

INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (1, 1, N'Có kinh nghiệm tối thiểu 2 năm trong lĩnh vực.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (1, 2, N'Tốt nghiệp trung cấp/cao đẳng trở lên các chuyên ngành liên quan')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (1, 3, N'Kỹ năng vi tính ( Microsoft Office )')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (1, 4, N'Kỹ năng lập kế hoạch và giải quyết vấn đề.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (1, 5, N'Khả năng làm việc độc lập và làm việc nhóm.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (2, 9, N'Mọi công dân nước Cộng Hòa Xã Hội Chủ Nghĩa Việt Nam, có lý lịch rõ ràng (có sơ yếu lý lịch), không tiền án tiền sự (có xác nhận hạnh kiểm do công an địa phương xác nhận), có sức khỏe tốt (có giấy khám sức khỏe do trung tâm y tế hoặc bệnh viện cấp quận huyện trở lên cấp)')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (3, 10, N'Nam, có sức khỏe tốt, tuổi từ 20 – 30.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (3, 11, N'Siêng năng, có phương tiện di chuyển cá nhân, sử dụng smartphone HĐH Android.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (3, 12, N'Tốt nghiệp Trung cấp, Cao đẳng chuyên ngành Điện: Điện – điện tử, Điện công nghiệp, Điện tử Công nghiệp, Điện dân dụng, Điện lạnh, Điện tử viễn thông hoặc các chuyên ngành liên quan về điện')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (3, 13, N'Có kinh nghiệm sửa chữa, lắp đặt hạ tầng viễn thông, internet, truyền hình cáp; có kiến thức về mạng nội bộ, CNTT… là lợi thế.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (3, 14, N'Có tư duy luôn lấy khách hàng làm trọng tâm.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (5, 49, N'1. Học vấn:')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (5, 50, N'Tốt nghiệp Đại học/Cao đẳng/Trung cấp thuộc một trong các chuyên ngành về: Thú y, Dược thú y, Chăn nuôi hoặc có kinh nghiệm trong chăn nuôi bò sữa.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (5, 51, N'2. Kinh nghiệm:')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (5, 52, N'Không yêu cầu kinh nghiệm (Có kinh nghiệm trong lĩnh vực liên quan là một lợi thế).')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (5, 53, N'Chấp nhận sinh viên đang chờ bằng tốt nghiệp.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (5, 54, N'3. Kiến thức chuyên môn và các kỹ năng:')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (5, 55, N'Có kiến thức chuyên môn.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (5, 56, N'Tính trung thực và ý thức trách nhiệm công việc.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (5, 57, N'Có khả năng làm việc độc lập và chịu áp lực cao.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (5, 58, N'Có khả năng phối hợp công việc với các bộ phận khác.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (5, 59, N'Có hiểu biết về các phần mềm: Word, Excel,...')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (5, 60, N'Có sức khỏe tốt.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (6, 84, N'Độ tuổi từ 24 tuổi - 35 tuổi (tối thiểu sinh năm 2000 trở lên - không nhận ứng viên dưới 24 tuổi)')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (6, 85, N'Tốt nghiệp Cao Đẳng trở lên các chuyên ngành')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (6, 86, N'Ưu tiên ứng viên có kinh nghiệm các lĩnh vực: kinh doanh, dịch vụ, ngân hàng, bảo hiểm, tài chính, chăm sóc khách hàng, bất động sản,…')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (6, 87, N'Năng động, nhiệt huyết và có tinh thần trách nhiệm cao')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (6, 88, N'Yêu thích công việc phát triển tệp khách hàng và chăm sóc khách hàng')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (6, 89, N'Có kỹ năng sử dụng mạng xã hội trong việc bán hàng')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (10, 90, N'Tốt nghiệp THPT trở lên, tuổi 20-32 tuổi')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (10, 91, N'Có kinh nghiệm telesale, tư vấn bán hàng, chăm sóc khách hàng, call center')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (10, 92, N'Nhanh nhẹn, giao tiếp tốt, khả năng chịu áp lực công việc cao.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (10, 93, N'Ưu tiên ứng viên từng có kinh nghiệm sale và có mục tiêu kiếm tiền rõ ràng')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (11, 130, N'1. Học vấn:')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (11, 131, N'Đại học các chuyên ngành Cơ khí, Điện, Điện tử, Cơ-điện tử, Tự động hóa hoặc các chuyên ngành kỹ thuật khác.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (11, 132, N'2. Kinh nghiệm:')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (11, 133, N'Ít nhất 1 năm kinh nghiệm làm việc trong lĩnh vực cơ điện, thiết kế, bảo trì, sửa chữa máy móc thiết bị công-nông nghiệp, giám sát thi công hoặc thực hiện các công tác triển khai dự án đầu tư, mua sắm, lắp đặt máy móc thiết bị')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (11, 134, N'Ưu tiên (không bắt buộc) có kinh nghiệm làm việc trong các công ty, nhà máy công nghiệp/sản xuất thực phẩm có quy mô lớn')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (11, 135, N'3. Kiến thức chuyên môn:')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (11, 136, N'Có kiến thức chuyên ngành về các lĩnh vực cơ điện, kỹ thuật.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (11, 137, N'Ưu tiên khi có kiến thức/kỹ năng về dây chuyền sản xuất hoặc kiến thức về chăn nuôi và các quy định, luật định quy chuẩn áp dụng trong chăn nuôi.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (11, 138, N'Ưu tiên khi có thể thiết kế kỹ thuật máy móc thiết bị.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (11, 139, N'Ưu tiên (không bắt buộc) có chứng chỉ đấu thầu cơ bản.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (11, 140, N'4. Kỹ năng:')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (11, 141, N'Kỹ năng trình bày, giao tiếp tốt')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (11, 142, N'Có khả năng tổng hợp, phân tích tư duy logic, đề xuất phương án giải quyết.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (11, 143, N'5. Yêu cầu khác:')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (11, 144, N'Sử dụng được AutoCad/ MS project')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (11, 145, N'Sử dụng tốt vi tính văn phòng: excel, word, powerpoint…')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (11, 146, N'Điểm cộng khi sử dụng được tiếng Anh chuyên ngành.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (11, 147, N'Phẩm chất đạo đức nghề nghiệp chính trực, có ý thức chấp hành pháp luật')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (12, 148, N'Có xe máy riêng. Tự túc về phương tiện đi lại')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (12, 149, N'Nhanh nhẹn, chăm chỉ, , nhiệt tình, sức khỏe tốt, có thể đi thị trường')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (12, 150, N'Tốt nghiệp THCS trở lên, Nam/nữ tuổi từ 18 - 45t.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (12, 151, N'Không yêu cầu kinh nghiệm')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (13, 152, N'Tốt nghiệp trung cấp trở lên chuyên ngành quản trị kinh doanh, kinh doanh quốc tế hoặc các ngành có liên quan: Xây dựng, Giao thông, Thủy lợi,…')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (13, 153, N'Có ít nhất 1 năm làm việc ở vị trí tương đương hoặc liên quan đến lĩnh vực kỹ thuật xây dựng.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (13, 154, N'Khả năng giao tiếp tốt, giọng nói dễ nghe, ngoại hình ưa nhìn.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (13, 155, N'Trung thực, trách nhiệm và nhạy bén, có khả năng làm việc độc lập. Cầu tiến, kiên trì theo đuổi mục tiêu và đam mê ngành sales.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (13, 156, N'Có thể đi công tác ngoại tỉnh ( không thường xuyên )')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (14, 157, N'Tốt nghiệp Trung cấp trở lên các ngành về Điện, xây dựng.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (14, 158, N'Có ít nhất 2 năm kinh nghiệm về điện, xây dựng, đọc bản vẽ.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (14, 159, N'Số lượng: 1 người, Nam từ 24 đến 35 tuổi.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (15, 160, N'Nam, không yêu cầu bằng cấp')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (15, 161, N'Không yêu cầu trình độ và kinh nghiệm')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (15, 162, N'Chịu khó')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (15, 163, N'Trung thực')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (15, 164, N'Chịu được áp lực công việc')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (15, 165, N'Đi công tác ở tỉnh (Phụ cấp 350k/ngày. Tự sắp xếp đi linh hoạt)')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (16, 166, N'Nam/Nữ, tốt nghiệp THPT trở lên.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (16, 167, N'Ưu tiên có kinh nghiệm sale Bất động sản')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (16, 168, N'Nhanh nhẹn, siêng năng, đam mê kinh doanh.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (16, 169, N'Chịu được áp lực công việc.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (16, 170, N'Có phương tiện, điện thoại, laptop.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (19, 180, N'Trình độ chuyên môn: Tốt nghiệp cao đẳng trở lên.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (19, 181, N'Có kinh nghiệm bán hàng 1 năm trở lên, ưu tiên kinh nghiệm với nhóm Khách hàng B2B.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (19, 182, N'Có kinh nghiệm trong mảng thực phẩm là một lợi thế.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (19, 183, N'Phẩm chất cá nhân: Nhanh nhẹn, chịu khó, hòa đồng, trung thực có tinh thần trách nhiệm.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (19, 184, N'Ưu tiên có hộ khẩu ở Bình Dương.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (19, 185, N'Sẵn sàng đi công tác xa nếu có yêu cầu.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (20, 186, N'Tốt nghiệp Đại Học chuyên ngành Công nghệ thực phẩm, Công nghệ sinh học, Hóa sinh')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (20, 187, N'Kỹ năng vi tính: Microsoft office: Word, Excel, Power Point')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (20, 188, N'Kỹ năng giao tiếp tốt, nhanh nhẹn, chăm chỉ, chịu khó, trung thực')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (20, 189, N'Có kinh nghiệm làm việc thực tiễn 02 năm trở lên, có kiến thức tốt về công nghệ thực phẩm.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (20, 190, N'Nhiệt tình trách nhiệm, năng động,chịu được áp lực công việc, xử lý linh hoạt tình huống phát sinh')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (21, 191, N'Giới tính: Nam')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (21, 192, N'Có khả năng quản lý đội nhóm, sắp xếp công việc')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (21, 193, N'Có 1 năm kinh nghiệm làm việc trong lĩnh vực chế biến thực phẩm')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (21, 194, N'Tốt nghiệp 12 trở lên ( có bằng Cao đẳng/Đại học chuyên ngành thực phẩm là 1 lợi thế)')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (21, 195, N'Tin học văn phòng cơ bản (Word, Exel…)')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (21, 196, N'Kỹ năng giao tiếp và xử lý vấn đề tốt')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (22, 197, N'Tốt nghiệp THPT trở lên (Còn giữ bằng cấp)')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (22, 198, N'Ưu tiên ứng viên có kinh nghiệm quản lý và bán hàng trong ngành FMCG hoặc các chuỗi cửa hàng.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (22, 199, N'Nam nữ từ 20-35 tuổi')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (22, 200, N'Có phương tiện di chuyển là xe máy')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (24, 204, N'Trình độ tốt nghiệp Cao đẳng trở lên ( ưu tiên chuyên môn quản trị kinh doanh )')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (24, 205, N'Sự nhạy bén và linh hoạt')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (24, 206, N'Kỹ năng xử lý tình huống và giải quyết vấn đề')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (24, 207, N'Khả năng chịu áp lực cao, kỹ năng làm việc nhóm')
GO
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (18, 233, N'Sinh viên năn cuối hoặc tốt nghiệp Cao đẳng/ Đại Học Chuyên ngành cơ khí')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (18, 234, N'Có kiến thức nền tảng về chuyên ngành cơ khí chế tạo máy, cơ điện tử.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (18, 235, N'Có hiểu biết cơ bản về hệ thống thủy lực: bơm dầu, van dầu, xylanh thủy lực')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (18, 236, N'Đọc hiểu tài liệu tiếng Anh.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (18, 237, N'Chịu khó, ham học hỏi.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (17, 238, N'Nhanh nhẹn, trung thực; chăm chỉ; chịu khó, có sức khỏe tốt . Có kinh nghiệm về hàn xì, điện là một lợi thế')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (17, 239, N'Kinh nghiệm đối với thợ chính: Số lượng 06 người ; ưu tiên có kinh nghiệm về lắp đặt thang máy từ 1 năm trở lên')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (17, 240, N'Kinh nghiệm đối với thợ phụ : Số lượng 06 người; Ưu tiên biết về Điện, cơ khí, hiểu biết về các loại máy móc cơ khí, có sức khỏe, nặng trên 55kg')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (17, 241, N'có kinh nghiệm làm việc tại công trường bên mảng điện dân dụng, phòng cháy, thông gió,... làm việc trong ngành thang máy, làm việc tại xưởng cơ khí....')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (23, 242, N'Giới tính: Nam, sức khỏe tốt;')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (23, 243, N'Tốt nghiệp Cao đẳng trở lên các chuyên ngành Thực phẩm, công nghệ sinh học, hóa học, bảo quản, chế biến.. hoặc tương đương...;')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (23, 244, N'Ưu tiên ứng viên đã có kinh nghiệm Vận hành trong các Nhà máy Bia, Rượu, Nước giải khát, Đồ uống hoặc Thực phẩm;...')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (25, 245, N'Tuổi: Từ 18- 47 tuổi')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (25, 246, N'Nhanh nhẹn, có trách nhiệm với công việc.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (25, 247, N'Có phong thái lịch sự và thái độ tích cực trong khi tiếp xúc với khách hàng và nhân viên khác, thể hiện tinh thần dịch vụ')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (25, 248, N'Tốt nghiệp Cấp 2 trở lên.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (25, 249, N'Có thể làm việc xoay ca: 7h-15h và 15h - 23h (có thể linh động đổi ca)')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (26, 250, N'Tốt nghiệp Cao đẳng: chuyên ngành y hoặc các ngành liên quan đến công việc;')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (26, 251, N'Tinh thần trách nhiệm cao, linh động.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (26, 252, N'Tính trung thực, bảo mật thông tin có liên quan đến công việc.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (26, 253, N'Làm việc tại Ou Kreang, Kbal Domrey, huyện Sambou, tỉnh Kratie, Vương quốc Campuchia.')
INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (26, 254, N'Người lao động không phải trả bất kỳ một khoản phí nào cho người sử dụng lao động hoặc người trung gian khi được tuyển dụng tại TTC – BH.')
SET IDENTITY_INSERT [dbo].[jobrequirements] OFF
GO
SET IDENTITY_INSERT [dbo].[jobs] ON 

INSERT [dbo].[jobs] ([numposition], [removed], [reuptimesleft], [typeid], [yearexperience], [employerid], [expirationdate], [jobid], [maxsalary], [minsalary], [postdate], [address], [jobname], [jobposition], [location]) VALUES (4, 0, 0, 2, 1, 2, CAST(N'2024-06-01T00:00:00.0000000' AS DateTime2), 1, 15, 10, CAST(N'2024-05-25T00:00:00.0000000' AS DateTime2), N'C20 ĐS1 số 295 Tân Kỳ Tân Quý, phường Tân Sơn Nhì, Tân Phú', N'Kỹ Sư An Toàn Lao Động HSE', N'Nhân viên', N'Thành phố Hồ Chí Minh')
INSERT [dbo].[jobs] ([numposition], [removed], [reuptimesleft], [typeid], [yearexperience], [employerid], [expirationdate], [jobid], [maxsalary], [minsalary], [postdate], [address], [jobname], [jobposition], [location]) VALUES (10, 1, 0, 2, 1, 3, CAST(N'2024-06-01T00:00:00.0000000' AS DateTime2), 2, 10, 5, CAST(N'2024-05-25T00:00:00.0000000' AS DateTime2), N'248 Đồng Đen, Phường 10, Quận Tân Bình', N'Nhân Viên An Ninh Và Bảo An', N'Chuyên viên- nhân viên', N'Thành phố Hồ Chí Minh')
INSERT [dbo].[jobs] ([numposition], [removed], [reuptimesleft], [typeid], [yearexperience], [employerid], [expirationdate], [jobid], [maxsalary], [minsalary], [postdate], [address], [jobname], [jobposition], [location]) VALUES (7, 0, 0, 2, 2, 4, CAST(N'2024-06-01T00:00:00.0000000' AS DateTime2), 3, 23, 8, CAST(N'2024-05-25T00:00:00.0000000' AS DateTime2), N'VP giao dịch FPT Telecom - 31 Lê Văn Quới, Phường Bình Trị Đông, Quận Bình Tân', N'Kỹ Thuật Lắp Đặt Và Bảo Trì Internet - Fpt Telecom Bình Tân', N'Chuyên viên- nhân viên', N'Thành phố Hồ Chí Minh')
INSERT [dbo].[jobs] ([numposition], [removed], [reuptimesleft], [typeid], [yearexperience], [employerid], [expirationdate], [jobid], [maxsalary], [minsalary], [postdate], [address], [jobname], [jobposition], [location]) VALUES (1, 0, 0, 2, 0, 5, CAST(N'2024-06-01T00:00:00.0000000' AS DateTime2), 5, 12, 8, CAST(N'2024-05-25T00:00:00.0000000' AS DateTime2), N'Tổ 60, ấp Long Thịnh - Xã Long Khánh - Huyện Bến Cầu', N'Nhân Viên Chăn Nuôi Thú Y', N'Chuyên viên- nhân viên', N'Tây Ninh')
INSERT [dbo].[jobs] ([numposition], [removed], [reuptimesleft], [typeid], [yearexperience], [employerid], [expirationdate], [jobid], [maxsalary], [minsalary], [postdate], [address], [jobname], [jobposition], [location]) VALUES (2, 0, 0, 2, 6, 6, CAST(N'2024-06-01T00:00:00.0000000' AS DateTime2), 6, 50, 1, CAST(N'2024-05-25T00:00:00.0000000' AS DateTime2), N'102C Nguyễn Văn Cừ, P.Nguyễn Cư Trinh, Quận 1', N'Chuyên Viên Quản Lý Khách Hàng Cao Cấp - Thu Nhập Từ 18 Triệu', N'Chuyên viên- nhân viên', N'Thành phố Hồ Chí Minh')
INSERT [dbo].[jobs] ([numposition], [removed], [reuptimesleft], [typeid], [yearexperience], [employerid], [expirationdate], [jobid], [maxsalary], [minsalary], [postdate], [address], [jobname], [jobposition], [location]) VALUES (2, 0, 0, 2, 1, 9, CAST(N'2024-06-02T00:00:00.0000000' AS DateTime2), 10, 30, 7, CAST(N'2024-05-26T00:00:00.0000000' AS DateTime2), N'Tòa nhà AXYS, Số 12A Núi Thành, Tân Bình', N'Chuyên Viên Telesale / Tư Vấn Chốt Đơn / Chăm Sóc Khách Hàng - Tân Bình (Thu Nhập Từ 10 - 30 Triệu).', N'Chuyên viên- nhân viên', N'Thành phố Hồ Chí Minh')
INSERT [dbo].[jobs] ([numposition], [removed], [reuptimesleft], [typeid], [yearexperience], [employerid], [expirationdate], [jobid], [maxsalary], [minsalary], [postdate], [address], [jobname], [jobposition], [location]) VALUES (3, 0, 2, 2, 4, 5, CAST(N'2024-06-25T16:17:24.9200000' AS DateTime2), 11, 22, 18, CAST(N'2024-05-26T16:17:24.9200000' AS DateTime2), N'Tòa nhà VINAMILK_số 10 Tân Trào, Phường Tân Phú, Quận 7', N'Chuyên Viên Cơ Điện_Q7, HCM_18_22 Triệu Đồng', N'Chuyên viên- nhân viên', N'Thành phố Hồ Chí Minh')
INSERT [dbo].[jobs] ([numposition], [removed], [reuptimesleft], [typeid], [yearexperience], [employerid], [expirationdate], [jobid], [maxsalary], [minsalary], [postdate], [address], [jobname], [jobposition], [location]) VALUES (3, 0, 0, 2, 0, 10, CAST(N'2024-06-02T00:00:00.0000000' AS DateTime2), 12, 15, 11, CAST(N'2024-05-26T00:00:00.0000000' AS DateTime2), N'Hoài Đức, Quốc Oai, Bắc Từ Liêm, Huế', N'Nhân Viên Kinh Doanh Thị Trường (Đà Nẵng - Quảng Nam - Huế)', N'Chuyên viên- nhân viên', N'Thừa Thiên Huế')
INSERT [dbo].[jobs] ([numposition], [removed], [reuptimesleft], [typeid], [yearexperience], [employerid], [expirationdate], [jobid], [maxsalary], [minsalary], [postdate], [address], [jobname], [jobposition], [location]) VALUES (4, 0, 0, 2, 1, 11, CAST(N'2024-06-02T00:00:00.0000000' AS DateTime2), 13, 20, 10, CAST(N'2024-05-26T00:00:00.0000000' AS DateTime2), N'312 Mai Chí Thọ, Hòa Xuân, Cẩm Lệ', N'Nhân Viên Kinh Doanh (Đà Nẵng)', N'Chuyên viên- nhân viên', N'Đà Nẵng')
INSERT [dbo].[jobs] ([numposition], [removed], [reuptimesleft], [typeid], [yearexperience], [employerid], [expirationdate], [jobid], [maxsalary], [minsalary], [postdate], [address], [jobname], [jobposition], [location]) VALUES (4, 0, 0, 2, 3, 12, CAST(N'2024-06-02T00:00:00.0000000' AS DateTime2), 14, 16, 12, CAST(N'2024-05-26T00:00:00.0000000' AS DateTime2), N'Phan Rang', N'Nhân Viên Điều Phối Tại Bạc Liêu, Ninh Thuận', N'Chuyên viên- nhân viên', N'Ninh Thuận')
INSERT [dbo].[jobs] ([numposition], [removed], [reuptimesleft], [typeid], [yearexperience], [employerid], [expirationdate], [jobid], [maxsalary], [minsalary], [postdate], [address], [jobname], [jobposition], [location]) VALUES (10, 0, 0, 2, 0, 13, CAST(N'2024-06-02T00:00:00.0000000' AS DateTime2), 15, 20, 11, CAST(N'2024-05-26T00:00:00.0000000' AS DateTime2), N'22/3A Tân Thới Hiệp 21, KP. 3, P. Tân Thới Hiệp', N'Nhân Viên Kinh Doanh', N'Chuyên viên- nhân viên', N'Hà Nội')
INSERT [dbo].[jobs] ([numposition], [removed], [reuptimesleft], [typeid], [yearexperience], [employerid], [expirationdate], [jobid], [maxsalary], [minsalary], [postdate], [address], [jobname], [jobposition], [location]) VALUES (50, 0, 0, 2, 0, 14, CAST(N'2024-06-02T00:00:00.0000000' AS DateTime2), 16, 100, 20, CAST(N'2024-05-26T00:00:00.0000000' AS DateTime2), N'Sarimi 74 Nguyễn Cơ Thạch, An Lợi Đông, TP Thủ Đức', N'Nhân Viên Kinh Doanh Bất Động Sản', N'Chuyên viên- nhân viên', N'Thành phố Hồ Chí Minh')
INSERT [dbo].[jobs] ([numposition], [removed], [reuptimesleft], [typeid], [yearexperience], [employerid], [expirationdate], [jobid], [maxsalary], [minsalary], [postdate], [address], [jobname], [jobposition], [location]) VALUES (6, 0, 0, 2, 1, 15, CAST(N'2024-06-02T00:00:00.0000000' AS DateTime2), 17, 18, 8, CAST(N'2024-05-26T00:00:00.0000000' AS DateTime2), N'Tầng 6 tòa nhà Việt á, Số 9 Duy Tân, Phường Dịch Vọng Hậu, Quận Cầu Giấy', N'Kỹ Thuật Lắp Đặt Thang Máy', N'Chuyên viên- nhân viên', N'Hà Nội')
INSERT [dbo].[jobs] ([numposition], [removed], [reuptimesleft], [typeid], [yearexperience], [employerid], [expirationdate], [jobid], [maxsalary], [minsalary], [postdate], [address], [jobname], [jobposition], [location]) VALUES (2, 0, 0, 2, 0, 16, CAST(N'2024-06-02T00:00:00.0000000' AS DateTime2), 18, 12, 9, CAST(N'2024-05-26T00:00:00.0000000' AS DateTime2), N'Lot G.02B, Street 1, Long Hau Industrial Plant, Can Giuoc District, Long An, Cần Giuộc', N'Engineering Trainee', N'Chuyên viên- nhân viên', N'Long An')
INSERT [dbo].[jobs] ([numposition], [removed], [reuptimesleft], [typeid], [yearexperience], [employerid], [expirationdate], [jobid], [maxsalary], [minsalary], [postdate], [address], [jobname], [jobposition], [location]) VALUES (5, 0, 0, 2, 0, 17, CAST(N'2024-06-02T00:00:00.0000000' AS DateTime2), 19, 50, 8, CAST(N'2024-05-26T00:00:00.0000000' AS DateTime2), N'Số 168/42, đường ĐX006, khu phố 8, Phường Phú Mỹ, Thành phố Thủ Dầu Một, Tỉnh Bình Dương,, Thủ Dầu Một', N'Nhân Viên Kinh Doanh Ngành Thực Phẩm', N'Chuyên viên- nhân viên', N'Bình Dương')
INSERT [dbo].[jobs] ([numposition], [removed], [reuptimesleft], [typeid], [yearexperience], [employerid], [expirationdate], [jobid], [maxsalary], [minsalary], [postdate], [address], [jobname], [jobposition], [location]) VALUES (1, 0, 0, 2, 2, 18, CAST(N'2024-06-02T00:00:00.0000000' AS DateTime2), 20, 15, 10, CAST(N'2024-05-26T00:00:00.0000000' AS DateTime2), N'Thôn Phú Đa, xã Hồng Khê, Bình Giang', N'Kỹ Sư Hóa Thực Phẩm - Hải Dương', N'Chuyên viên- nhân viên', N'Hải Dương')
INSERT [dbo].[jobs] ([numposition], [removed], [reuptimesleft], [typeid], [yearexperience], [employerid], [expirationdate], [jobid], [maxsalary], [minsalary], [postdate], [address], [jobname], [jobposition], [location]) VALUES (2, 0, 0, 2, 1, 19, CAST(N'2024-06-02T00:00:00.0000000' AS DateTime2), 21, 14, 10, CAST(N'2024-05-26T00:00:00.0000000' AS DateTime2), N'LÔ C8, KCN LONG BÌNH, TP. BIÊN HÒA, ĐỒNG NAI, Biên Hòa', N'Tổ Trưởng Line Sản Xuất (Lĩnh Vực Chế Biến Thực Phẩm)', N'Quản lý nhóm- giám sát', N'Đồng Nai')
INSERT [dbo].[jobs] ([numposition], [removed], [reuptimesleft], [typeid], [yearexperience], [employerid], [expirationdate], [jobid], [maxsalary], [minsalary], [postdate], [address], [jobname], [jobposition], [location]) VALUES (1, 0, 0, 2, 1, 20, CAST(N'2024-06-02T00:00:00.0000000' AS DateTime2), 22, 12, 8, CAST(N'2024-05-26T00:00:00.0000000' AS DateTime2), N'CH 167 Nguyễn Thị Minh Khai, Nha Trang, Khánh Hòa, Nha Trang', N'Cửa Hàng Trưởng Th Truemart', N'Quản lý nhóm- giám sát', N'Khánh Hòa')
INSERT [dbo].[jobs] ([numposition], [removed], [reuptimesleft], [typeid], [yearexperience], [employerid], [expirationdate], [jobid], [maxsalary], [minsalary], [postdate], [address], [jobname], [jobposition], [location]) VALUES (3, 0, 0, 2, 1, 21, CAST(N'2024-06-02T00:00:00.0000000' AS DateTime2), 23, 10, 8, CAST(N'2024-05-26T00:00:00.0000000' AS DateTime2), N'Từ Sơn', N'Nhân Viên / Kỹ Thuật Viên Vận Hành Chế Biến', N'Chuyên viên- nhân viên', N'Bắc Ninh')
INSERT [dbo].[jobs] ([numposition], [removed], [reuptimesleft], [typeid], [yearexperience], [employerid], [expirationdate], [jobid], [maxsalary], [minsalary], [postdate], [address], [jobname], [jobposition], [location]) VALUES (1, 0, 0, 2, 2, 22, CAST(N'2024-06-02T00:00:00.0000000' AS DateTime2), 24, 25, 13, CAST(N'2024-05-26T00:00:00.0000000' AS DateTime2), N'ĐT822, Tân Mỹ, (dự án West Lakes Goft), Đức Hòa', N'Trưởng Ban Vận Hành Dự Án', N'Quản lý cấp trung', N'Long An')
INSERT [dbo].[jobs] ([numposition], [removed], [reuptimesleft], [typeid], [yearexperience], [employerid], [expirationdate], [jobid], [maxsalary], [minsalary], [postdate], [address], [jobname], [jobposition], [location]) VALUES (20, 0, 0, 2, 0, 23, CAST(N'2024-06-02T00:00:00.0000000' AS DateTime2), 25, 10, 7, CAST(N'2024-05-26T00:00:00.0000000' AS DateTime2), N'VCP Mỹ Tho, Số 1A đường Hùng Vương, Phường 1, thành phố Mỹ Tho, Tiền Giang, Mỹ Tho', N'Nhân Viên Vệ Sinh Tạp Vụ', N'Chuyên viên- nhân viên', N'Tiền Giang')
INSERT [dbo].[jobs] ([numposition], [removed], [reuptimesleft], [typeid], [yearexperience], [employerid], [expirationdate], [jobid], [maxsalary], [minsalary], [postdate], [address], [jobname], [jobposition], [location]) VALUES (1, 0, 0, 2, 1, 24, CAST(N'2024-06-02T00:00:00.0000000' AS DateTime2), 26, 15, 12, CAST(N'2024-05-26T00:00:00.0000000' AS DateTime2), N'Tân Hưng, Tân Châu', N'Nhân Viên Y Tế', N'Chuyên viên- nhân viên', N'Tây Ninh')
SET IDENTITY_INSERT [dbo].[jobs] OFF
GO
INSERT [dbo].[jobs_industries] ([industries_industryid], [job_jobid]) VALUES (1, 1)
INSERT [dbo].[jobs_industries] ([industries_industryid], [job_jobid]) VALUES (1, 3)
INSERT [dbo].[jobs_industries] ([industries_industryid], [job_jobid]) VALUES (1, 11)
INSERT [dbo].[jobs_industries] ([industries_industryid], [job_jobid]) VALUES (1, 14)
INSERT [dbo].[jobs_industries] ([industries_industryid], [job_jobid]) VALUES (1, 17)
INSERT [dbo].[jobs_industries] ([industries_industryid], [job_jobid]) VALUES (1, 18)
INSERT [dbo].[jobs_industries] ([industries_industryid], [job_jobid]) VALUES (3, 3)
INSERT [dbo].[jobs_industries] ([industries_industryid], [job_jobid]) VALUES (3, 10)
INSERT [dbo].[jobs_industries] ([industries_industryid], [job_jobid]) VALUES (3, 18)
INSERT [dbo].[jobs_industries] ([industries_industryid], [job_jobid]) VALUES (4, 1)
INSERT [dbo].[jobs_industries] ([industries_industryid], [job_jobid]) VALUES (4, 18)
INSERT [dbo].[jobs_industries] ([industries_industryid], [job_jobid]) VALUES (5, 10)
INSERT [dbo].[jobs_industries] ([industries_industryid], [job_jobid]) VALUES (5, 12)
INSERT [dbo].[jobs_industries] ([industries_industryid], [job_jobid]) VALUES (5, 13)
INSERT [dbo].[jobs_industries] ([industries_industryid], [job_jobid]) VALUES (5, 14)
INSERT [dbo].[jobs_industries] ([industries_industryid], [job_jobid]) VALUES (5, 15)
INSERT [dbo].[jobs_industries] ([industries_industryid], [job_jobid]) VALUES (5, 16)
INSERT [dbo].[jobs_industries] ([industries_industryid], [job_jobid]) VALUES (5, 19)
INSERT [dbo].[jobs_industries] ([industries_industryid], [job_jobid]) VALUES (5, 22)
INSERT [dbo].[jobs_industries] ([industries_industryid], [job_jobid]) VALUES (7, 16)
INSERT [dbo].[jobs_industries] ([industries_industryid], [job_jobid]) VALUES (7, 24)
INSERT [dbo].[jobs_industries] ([industries_industryid], [job_jobid]) VALUES (8, 2)
INSERT [dbo].[jobs_industries] ([industries_industryid], [job_jobid]) VALUES (8, 25)
INSERT [dbo].[jobs_industries] ([industries_industryid], [job_jobid]) VALUES (9, 2)
INSERT [dbo].[jobs_industries] ([industries_industryid], [job_jobid]) VALUES (9, 6)
INSERT [dbo].[jobs_industries] ([industries_industryid], [job_jobid]) VALUES (10, 5)
INSERT [dbo].[jobs_industries] ([industries_industryid], [job_jobid]) VALUES (10, 11)
INSERT [dbo].[jobs_industries] ([industries_industryid], [job_jobid]) VALUES (10, 21)
INSERT [dbo].[jobs_industries] ([industries_industryid], [job_jobid]) VALUES (11, 5)
INSERT [dbo].[jobs_industries] ([industries_industryid], [job_jobid]) VALUES (11, 21)
INSERT [dbo].[jobs_industries] ([industries_industryid], [job_jobid]) VALUES (12, 15)
INSERT [dbo].[jobs_industries] ([industries_industryid], [job_jobid]) VALUES (14, 5)
INSERT [dbo].[jobs_industries] ([industries_industryid], [job_jobid]) VALUES (14, 20)
INSERT [dbo].[jobs_industries] ([industries_industryid], [job_jobid]) VALUES (14, 21)
INSERT [dbo].[jobs_industries] ([industries_industryid], [job_jobid]) VALUES (14, 22)
INSERT [dbo].[jobs_industries] ([industries_industryid], [job_jobid]) VALUES (14, 23)
INSERT [dbo].[jobs_industries] ([industries_industryid], [job_jobid]) VALUES (14, 26)
INSERT [dbo].[jobs_industries] ([industries_industryid], [job_jobid]) VALUES (15, 3)
INSERT [dbo].[jobs_industries] ([industries_industryid], [job_jobid]) VALUES (15, 17)
GO
SET IDENTITY_INSERT [dbo].[jobtypes] ON 

INSERT [dbo].[jobtypes] ([typeid], [type]) VALUES (1, N'Parttime')
INSERT [dbo].[jobtypes] ([typeid], [type]) VALUES (2, N'Fulltime')
SET IDENTITY_INSERT [dbo].[jobtypes] OFF
GO
SET IDENTITY_INSERT [dbo].[notifications] ON 

INSERT [dbo].[notifications] ([seen], [notificationid], [postdate], [userid], [message]) VALUES (1, 1, CAST(N'2024-05-26T00:00:00.0000000' AS DateTime2), 4, N'Ứng viên Phạm Văn Hoàng đã ứng tuyển vào công việc Kỹ Thuật Lắp Đặt Và Bảo Trì Internet - Fpt Telecom Bình Tân của bạn')
INSERT [dbo].[notifications] ([seen], [notificationid], [postdate], [userid], [message]) VALUES (1, 2, CAST(N'2024-05-26T00:00:00.0000000' AS DateTime2), 8, N'Công việc Kỹ Thuật Lắp Đặt Và Bảo Trì Internet - Fpt Telecom Bình Tân bạn ứng tuyển đã được duyệt bởi nhà tuyển dụng')
INSERT [dbo].[notifications] ([seen], [notificationid], [postdate], [userid], [message]) VALUES (1, 3, CAST(N'2024-05-26T00:00:00.0000000' AS DateTime2), 5, N'Ứng viên Mai Xuân Quốc đã ứng tuyển vào công việc Chuyên Viên Cơ Điện_Q7, HCM_18_22 Triệu Đồng của bạn')
INSERT [dbo].[notifications] ([seen], [notificationid], [postdate], [userid], [message]) VALUES (1, 4, CAST(N'2024-05-26T00:00:00.0000000' AS DateTime2), 2, N'Ứng viên Phạm Văn Hoàng đã ứng tuyển vào công việc Nhân Viên Kinh Doanh của bạn')
INSERT [dbo].[notifications] ([seen], [notificationid], [postdate], [userid], [message]) VALUES (1, 5, CAST(N'2024-05-26T00:00:00.0000000' AS DateTime2), 5, N'Ứng viên Nguyễn Nhật Sơn đã ứng tuyển vào công việc Chuyên Viên Cơ Điện_Q7, HCM_18_22 Triệu Đồng của bạn')
INSERT [dbo].[notifications] ([seen], [notificationid], [postdate], [userid], [message]) VALUES (1, 6, CAST(N'2024-05-26T00:00:00.0000000' AS DateTime2), 26, N'Công việc Chuyên Viên Cơ Điện_Q7, HCM_18_22 Triệu Đồng bạn ứng tuyển đã được duyệt bởi nhà tuyển dụng')
INSERT [dbo].[notifications] ([seen], [notificationid], [postdate], [userid], [message]) VALUES (1, 7, CAST(N'2024-05-26T00:00:00.0000000' AS DateTime2), 7, N'Công việc Chuyên Viên Cơ Điện_Q7, HCM_18_22 Triệu Đồng bạn ứng tuyển bị từ chối bởi nhà tuyển dụng')
INSERT [dbo].[notifications] ([seen], [notificationid], [postdate], [userid], [message]) VALUES (1, 8, CAST(N'2024-05-26T00:00:00.0000000' AS DateTime2), 3, N'Ứng viên Mai Xuân Quốc đã ứng tuyển vào công việc Nhân Viên An Ninh Và Bảo An của bạn')
INSERT [dbo].[notifications] ([seen], [notificationid], [postdate], [userid], [message]) VALUES (0, 9, CAST(N'2024-05-26T00:00:00.0000000' AS DateTime2), 24, N'Ứng viên Mai Xuân Quốc đã ứng tuyển vào công việc Nhân Viên Y Tế của bạn')
INSERT [dbo].[notifications] ([seen], [notificationid], [postdate], [userid], [message]) VALUES (1, 10, CAST(N'2024-05-26T00:00:00.0000000' AS DateTime2), 3, N'Ứng viên Phạm Văn Hoàng đã ứng tuyển vào công việc Nhân Viên An Ninh Và Bảo An của bạn')
INSERT [dbo].[notifications] ([seen], [notificationid], [postdate], [userid], [message]) VALUES (0, 11, CAST(N'2024-05-26T00:00:00.0000000' AS DateTime2), 1, N'Ứng viên Phạm Văn Hoàng đã báo cáo công việc Nhân Viên An Ninh Và Bảo An')
INSERT [dbo].[notifications] ([seen], [notificationid], [postdate], [userid], [message]) VALUES (0, 12, CAST(N'2024-05-26T00:00:00.0000000' AS DateTime2), 8, N'Công việc Nhân Viên Kinh Doanh bạn ứng tuyển đã được duyệt bởi nhà tuyển dụng')
INSERT [dbo].[notifications] ([seen], [notificationid], [postdate], [userid], [message]) VALUES (0, 13, CAST(N'2024-05-26T17:25:00.5830000' AS DateTime2), 25, N'Tài khoản của bạn đã được duyệt.')
SET IDENTITY_INSERT [dbo].[notifications] OFF
GO
INSERT [dbo].[provinces] ([provincename]) VALUES (N'An Giang')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Bà Rịa - Vũng Tàu')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Bắc Giang')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Bắc Kạn')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Bạc Liêu')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Bắc Ninh')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Bến Tre')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Bình Định')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Bình Dương')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Bình Phước')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Bình Thuận')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Cà Mau')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Cần Thơ')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Cao Bằng')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Đà Nẵng')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Đắk Lắk')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Đắk Nông')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Điện Biên')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Đồng Nai')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Đồng Tháp')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Gia Lai')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Hà Giang')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Hà Nam')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Hà Nội')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Hà Tĩnh')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Hải Dương')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Hải Phòng')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Hậu Giang')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Hòa Bình')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Hưng Yên')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Khánh Hòa')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Kiên Giang')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Kon Tum')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Lai Châu')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Lâm Đồng')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Lạng Sơn')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Lào Cai')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Long An')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Nam Định')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Nghệ An')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Ninh Bình')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Ninh Thuận')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Phú Thọ')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Phú Yên')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Quảng Bình')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Quảng Nam')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Quảng Ngãi')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Quảng Ninh')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Quảng Trị')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Sóc Trăng')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Sơn La')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Tây Ninh')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Thái Bình')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Thái Nguyên')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Thanh Hóa')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Thành phố Hồ Chí Minh')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Thừa Thiên Huế')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Tiền Giang')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Trà Vinh')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Tuyên Quang')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Vĩnh Long')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Vĩnh Phúc')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Yên Bái')
GO
SET IDENTITY_INSERT [dbo].[ranks] ON 

INSERT [dbo].[ranks] ([displaytime], [limitpost], [price], [reuptimes], [rankid], [description], [photo], [rankname]) VALUES (7, 1, 0, 0, 1, N'Thành viên', N'thanhvien.png', N'Thành viên')
INSERT [dbo].[ranks] ([displaytime], [limitpost], [price], [reuptimes], [rankid], [description], [photo], [rankname]) VALUES (14, 2, 1000000, 1, 2, N'Bạc', N'bac.png', N'Bạc')
INSERT [dbo].[ranks] ([displaytime], [limitpost], [price], [reuptimes], [rankid], [description], [photo], [rankname]) VALUES (21, 3, 2000000, 2, 3, N'Vàng', N'vang.png', N'Vàng')
INSERT [dbo].[ranks] ([displaytime], [limitpost], [price], [reuptimes], [rankid], [description], [photo], [rankname]) VALUES (30, 4, 3000000, 3, 4, N'Kim cương', N'kimcuong.png', N'Kim cương')
SET IDENTITY_INSERT [dbo].[ranks] OFF
GO
SET IDENTITY_INSERT [dbo].[timelines] ON 

INSERT [dbo].[timelines] ([candidateid], [timelineid], [job], [stage]) VALUES (26, 1, N'Tester', N'2020-2024')
INSERT [dbo].[timelines] ([candidateid], [timelineid], [job], [stage]) VALUES (27, 2, N'Tester', N'2020-2021')
INSERT [dbo].[timelines] ([candidateid], [timelineid], [job], [stage]) VALUES (28, 3, N'Tester', N'2020-2021')
SET IDENTITY_INSERT [dbo].[timelines] OFF
GO
SET IDENTITY_INSERT [dbo].[users] ON 

INSERT [dbo].[users] ([blocked], [userid], [password], [role], [username]) VALUES (0, 1, N'$2a$05$bfZ.aYp8gv1p0pN6zI.DWOf9.ozw6xmlUdot07bOuD1xVNcbaXTmi', N'admin', N'admin')
INSERT [dbo].[users] ([blocked], [userid], [password], [role], [username]) VALUES (0, 2, N'$2a$05$TwLxwqlc60fFR/zb4PaG8.ENyH35PjUXwkHEv/IwfvPjLfS3N0JOu', N'employer', N'employer1')
INSERT [dbo].[users] ([blocked], [userid], [password], [role], [username]) VALUES (0, 3, N'$2a$05$1tKyuUT55Ju38zOvX8BZiuqVsZUkkKsDcGZino9rWzz9YlKIN9tXq', N'employer', N'employer2')
INSERT [dbo].[users] ([blocked], [userid], [password], [role], [username]) VALUES (0, 4, N'$2a$05$puZWSIhvlt7V79bvP1/KpOxquCTCsbzJrJMqeDBzBvz71H/RdRPb.', N'employer', N'employer3')
INSERT [dbo].[users] ([blocked], [userid], [password], [role], [username]) VALUES (0, 5, N'$2a$05$Dfa9fVU7/RA5kCXcAjtFsuuZrObQwBHFvo2Q2HLEkuAjqdcNd3OAa', N'employer', N'employer4')
INSERT [dbo].[users] ([blocked], [userid], [password], [role], [username]) VALUES (0, 6, N'$2a$05$oaViYyaA2JgaYIw.Ybduwu9rx2VPbafLWj2PZ6XyTipO8o/CBrgpy', N'employer', N'employer5')
INSERT [dbo].[users] ([blocked], [userid], [password], [role], [username]) VALUES (0, 7, N'$2a$05$Itxfmm/SGdjLzWwh.Hk9DOWu5wsd.pddgIYcaCsIZYj2HR4Jjs7zm', N'candidate', N'candidate1')
INSERT [dbo].[users] ([blocked], [userid], [password], [role], [username]) VALUES (0, 8, N'$2a$05$pWCS79yHfI30E.08WdnlMeJIhiX1Znukke49kNDHPaKelUl/J4Kpi', N'candidate', N'candidate2')
INSERT [dbo].[users] ([blocked], [userid], [password], [role], [username]) VALUES (0, 9, N'$2a$05$Nzqu411NeRNE1UwseuR2heGOHwB19pV3FF7XsyvUU6.6R.pLNWC66', N'employer', N'employer6')
INSERT [dbo].[users] ([blocked], [userid], [password], [role], [username]) VALUES (0, 10, N'$2a$05$FCZH9Ej94HM55WmFBZnd9OyOJRXcBRZQYTg6sPbLelP4rHTLZflGO', N'employer', N'employer7')
INSERT [dbo].[users] ([blocked], [userid], [password], [role], [username]) VALUES (0, 11, N'$2a$05$XoewliLhyFOTWuhwX9yk2.cEn3abG5LZRMVtcVBb14HWj8N2uTqCu', N'employer', N'employer8')
INSERT [dbo].[users] ([blocked], [userid], [password], [role], [username]) VALUES (0, 12, N'$2a$05$pZ6SsyR.LZNvtqWiGoQXJ.q82/qfhVntGZe7FSAVWoP9FHPJfcu5C', N'employer', N'employer9')
INSERT [dbo].[users] ([blocked], [userid], [password], [role], [username]) VALUES (0, 13, N'$2a$05$NVRza53cEZnlFCb3zO4orufIiafR/U958UXdvrBadU/JU8LO9OQ7G', N'employer', N'employer10')
INSERT [dbo].[users] ([blocked], [userid], [password], [role], [username]) VALUES (0, 14, N'$2a$05$q7RA/dAzER2i.IwWN1DKvuT2nA3z5Pdu9uWDQj6cgBybhVd4hYBJ2', N'employer', N'employer11')
INSERT [dbo].[users] ([blocked], [userid], [password], [role], [username]) VALUES (0, 15, N'$2a$05$T4ffajeB/Xr64Mc34UR/AupQFq4gY59sA6j5eadvtxMba6gOw6kvy', N'employer', N'employer12')
INSERT [dbo].[users] ([blocked], [userid], [password], [role], [username]) VALUES (0, 16, N'$2a$05$xsnNANXzp8zU5nRqdih96uaWbph18mVIjs.cpIsQhurOj03Ycqn7C', N'employer', N'employer13')
INSERT [dbo].[users] ([blocked], [userid], [password], [role], [username]) VALUES (0, 17, N'$2a$05$itj8nabSeeb5zPlFMTspuumcFqXJ1pZIUNYHhsMv56.t.6V728ycm', N'employer', N'employer14')
INSERT [dbo].[users] ([blocked], [userid], [password], [role], [username]) VALUES (0, 18, N'$2a$05$O4s3SpNcouUyKGB4jtkl5.CliV4ZmNM1f0Y/M1lgArDrwZJ4JYBoO', N'employer', N'employer15')
INSERT [dbo].[users] ([blocked], [userid], [password], [role], [username]) VALUES (0, 19, N'$2a$05$XjEygQou0TPACpUNvqOIsOfmoLn2l58l9rjskVK0S4MUG7bYCDhs6', N'employer', N'employer16')
INSERT [dbo].[users] ([blocked], [userid], [password], [role], [username]) VALUES (0, 20, N'$2a$05$MqjTkIIAjWRjN7VtK.FTLu0Nbcf4ybiNzpMpqbnxHhHDP3wPI7dVy', N'employer', N'employer17')
INSERT [dbo].[users] ([blocked], [userid], [password], [role], [username]) VALUES (0, 21, N'$2a$05$Mye211ywbPV27e7ekFKvYeTYJCVMKj0L6zWzbDCRr9XznA/Iuyq8W', N'employer', N'employer18')
INSERT [dbo].[users] ([blocked], [userid], [password], [role], [username]) VALUES (0, 22, N'$2a$05$y.PAkoq4.syR1FbLcJIuAuQk6uLYsv6p7eMYwu39AlC2NfBoFNDxi', N'employer', N'employer19')
INSERT [dbo].[users] ([blocked], [userid], [password], [role], [username]) VALUES (0, 23, N'$2a$05$cT0bnEA/ls.sF5AuQBwF7e2sx/No2M9KDYValN/SIv8nEj0F4Q6ey', N'employer', N'employer20')
INSERT [dbo].[users] ([blocked], [userid], [password], [role], [username]) VALUES (0, 24, N'$2a$05$mBZC.Xop.Hystd5ZyiV2y.1nKAmO/Yga2ip0kT/hUVoS3ev2GitT6', N'employer', N'employer21')
INSERT [dbo].[users] ([blocked], [userid], [password], [role], [username]) VALUES (0, 25, N'$2a$05$sz7D9hgMrSMIvrQE0qU9VOUJMTho58PjjKpwRd3.oaLjbFstA3F2m', N'employer', N'Nal123')
INSERT [dbo].[users] ([blocked], [userid], [password], [role], [username]) VALUES (0, 26, N'$2a$05$7Q4Ddhaya99nnHgF8.oVJuWxDoV8YlxuQqgRQVjUTQVkG8.cSWwgG', N'candidate', N'candidate5')
INSERT [dbo].[users] ([blocked], [userid], [password], [role], [username]) VALUES (0, 27, N'$2a$05$vFtQ1e.ck0v8gUNwcTOQF.DbaQVS7NRHT9z0qV3CQ9x5s2ugKZ3oC', N'candidate', N'candidate9')
INSERT [dbo].[users] ([blocked], [userid], [password], [role], [username]) VALUES (0, 28, N'$2a$05$G3P4iwGpjwRGlGBu9zvanesWDOgeJXrjcqvuftC9D796IXUC3aoGC', N'candidate', N'candidate10')
SET IDENTITY_INSERT [dbo].[users] OFF
GO
ALTER TABLE [dbo].[applications]  WITH CHECK ADD  CONSTRAINT [FK1gkm3kfhnuo9lqyad6pdmkr5d] FOREIGN KEY([jobid])
REFERENCES [dbo].[jobs] ([jobid])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[applications] CHECK CONSTRAINT [FK1gkm3kfhnuo9lqyad6pdmkr5d]
GO
ALTER TABLE [dbo].[applications]  WITH CHECK ADD  CONSTRAINT [FK6wvmb8h9yi3euwm20cqa54f8c] FOREIGN KEY([candidateid])
REFERENCES [dbo].[candidates] ([candidateid])
GO
ALTER TABLE [dbo].[applications] CHECK CONSTRAINT [FK6wvmb8h9yi3euwm20cqa54f8c]
GO
ALTER TABLE [dbo].[applications]  WITH CHECK ADD  CONSTRAINT [FKhk663v3uy6eu9ty7717vrfbcg] FOREIGN KEY([status])
REFERENCES [dbo].[applicationstatus] ([status])
GO
ALTER TABLE [dbo].[applications] CHECK CONSTRAINT [FKhk663v3uy6eu9ty7717vrfbcg]
GO
ALTER TABLE [dbo].[candidates]  WITH CHECK ADD  CONSTRAINT [FKiuvul8flctwkqi4h05pnt3n9r] FOREIGN KEY([provincename])
REFERENCES [dbo].[provinces] ([provincename])
GO
ALTER TABLE [dbo].[candidates] CHECK CONSTRAINT [FKiuvul8flctwkqi4h05pnt3n9r]
GO
ALTER TABLE [dbo].[candidates]  WITH CHECK ADD  CONSTRAINT [FKly89s72e5pmf3ch7fofsuhkvq] FOREIGN KEY([candidateid])
REFERENCES [dbo].[users] ([userid])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[candidates] CHECK CONSTRAINT [FKly89s72e5pmf3ch7fofsuhkvq]
GO
ALTER TABLE [dbo].[cvs]  WITH CHECK ADD  CONSTRAINT [FKnsb2r2osmgk5fdscnv8phn0xk] FOREIGN KEY([candidateid])
REFERENCES [dbo].[candidates] ([candidateid])
GO
ALTER TABLE [dbo].[cvs] CHECK CONSTRAINT [FKnsb2r2osmgk5fdscnv8phn0xk]
GO
ALTER TABLE [dbo].[employerreviews]  WITH CHECK ADD  CONSTRAINT [FKgql1sbt8jg3rpf62ttsrtqchf] FOREIGN KEY([candidateid])
REFERENCES [dbo].[candidates] ([candidateid])
GO
ALTER TABLE [dbo].[employerreviews] CHECK CONSTRAINT [FKgql1sbt8jg3rpf62ttsrtqchf]
GO
ALTER TABLE [dbo].[employerreviews]  WITH CHECK ADD  CONSTRAINT [FKifiyewktg4chqahbqrt09xchf] FOREIGN KEY([employerid])
REFERENCES [dbo].[employers] ([employerid])
GO
ALTER TABLE [dbo].[employerreviews] CHECK CONSTRAINT [FKifiyewktg4chqahbqrt09xchf]
GO
ALTER TABLE [dbo].[employers]  WITH CHECK ADD  CONSTRAINT [FKjh11v0uofu5ff247u5o60ct7b] FOREIGN KEY([employerid])
REFERENCES [dbo].[users] ([userid])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[employers] CHECK CONSTRAINT [FKjh11v0uofu5ff247u5o60ct7b]
GO
ALTER TABLE [dbo].[employers]  WITH CHECK ADD  CONSTRAINT [FKl2q09kj259jlvl5ewcua0mkfn] FOREIGN KEY([provincename])
REFERENCES [dbo].[provinces] ([provincename])
GO
ALTER TABLE [dbo].[employers] CHECK CONSTRAINT [FKl2q09kj259jlvl5ewcua0mkfn]
GO
ALTER TABLE [dbo].[employers]  WITH CHECK ADD  CONSTRAINT [FKvf5pj3ef3ckmbf7k11waysea] FOREIGN KEY([rankid])
REFERENCES [dbo].[ranks] ([rankid])
GO
ALTER TABLE [dbo].[employers] CHECK CONSTRAINT [FKvf5pj3ef3ckmbf7k11waysea]
GO
ALTER TABLE [dbo].[follows]  WITH CHECK ADD  CONSTRAINT [FK4wbpi5qer2yx7ebgii5i3olk6] FOREIGN KEY([employerid])
REFERENCES [dbo].[employers] ([employerid])
GO
ALTER TABLE [dbo].[follows] CHECK CONSTRAINT [FK4wbpi5qer2yx7ebgii5i3olk6]
GO
ALTER TABLE [dbo].[follows]  WITH CHECK ADD  CONSTRAINT [FKq37okhkqrqt0h3acrfpeuc54d] FOREIGN KEY([candidateid])
REFERENCES [dbo].[candidates] ([candidateid])
GO
ALTER TABLE [dbo].[follows] CHECK CONSTRAINT [FKq37okhkqrqt0h3acrfpeuc54d]
GO
ALTER TABLE [dbo].[jobbenefits]  WITH CHECK ADD  CONSTRAINT [FKguqq9yjrh8ty8vlptq7kwbn3c] FOREIGN KEY([jobid])
REFERENCES [dbo].[jobs] ([jobid])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[jobbenefits] CHECK CONSTRAINT [FKguqq9yjrh8ty8vlptq7kwbn3c]
GO
ALTER TABLE [dbo].[jobdescriptions]  WITH CHECK ADD  CONSTRAINT [FKnb5fldj2vr5bs0eq9hnmm662q] FOREIGN KEY([jobid])
REFERENCES [dbo].[jobs] ([jobid])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[jobdescriptions] CHECK CONSTRAINT [FKnb5fldj2vr5bs0eq9hnmm662q]
GO
ALTER TABLE [dbo].[jobinterests]  WITH CHECK ADD  CONSTRAINT [FK3iyjcpsmc6pi640r3kfdqbs0l] FOREIGN KEY([jobid])
REFERENCES [dbo].[jobs] ([jobid])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[jobinterests] CHECK CONSTRAINT [FK3iyjcpsmc6pi640r3kfdqbs0l]
GO
ALTER TABLE [dbo].[jobinterests]  WITH CHECK ADD  CONSTRAINT [FKlen4tmswg5v9nijmo0bhqyntv] FOREIGN KEY([candidateid])
REFERENCES [dbo].[candidates] ([candidateid])
GO
ALTER TABLE [dbo].[jobinterests] CHECK CONSTRAINT [FKlen4tmswg5v9nijmo0bhqyntv]
GO
ALTER TABLE [dbo].[jobreports]  WITH CHECK ADD  CONSTRAINT [FKdo6oo4aedpwpfuukw8ax820c5] FOREIGN KEY([jobid])
REFERENCES [dbo].[jobs] ([jobid])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[jobreports] CHECK CONSTRAINT [FKdo6oo4aedpwpfuukw8ax820c5]
GO
ALTER TABLE [dbo].[jobreports]  WITH CHECK ADD  CONSTRAINT [FKk9r7o62okgvtqxpvk5c3qo3kq] FOREIGN KEY([candidateid])
REFERENCES [dbo].[candidates] ([candidateid])
GO
ALTER TABLE [dbo].[jobreports] CHECK CONSTRAINT [FKk9r7o62okgvtqxpvk5c3qo3kq]
GO
ALTER TABLE [dbo].[jobrequirements]  WITH CHECK ADD  CONSTRAINT [FKr8lqrq1htya790sb3v6ixdprx] FOREIGN KEY([jobid])
REFERENCES [dbo].[jobs] ([jobid])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[jobrequirements] CHECK CONSTRAINT [FKr8lqrq1htya790sb3v6ixdprx]
GO
ALTER TABLE [dbo].[jobs]  WITH CHECK ADD  CONSTRAINT [FK1f219ra11a9ch6c8oy6fafdki] FOREIGN KEY([location])
REFERENCES [dbo].[provinces] ([provincename])
GO
ALTER TABLE [dbo].[jobs] CHECK CONSTRAINT [FK1f219ra11a9ch6c8oy6fafdki]
GO
ALTER TABLE [dbo].[jobs]  WITH CHECK ADD  CONSTRAINT [FKbwew3r22t2m7cmqelk8gg5er0] FOREIGN KEY([employerid])
REFERENCES [dbo].[employers] ([employerid])
GO
ALTER TABLE [dbo].[jobs] CHECK CONSTRAINT [FKbwew3r22t2m7cmqelk8gg5er0]
GO
ALTER TABLE [dbo].[jobs]  WITH CHECK ADD  CONSTRAINT [FKg1t6ucxe8bgktug5heb36ulq0] FOREIGN KEY([typeid])
REFERENCES [dbo].[jobtypes] ([typeid])
GO
ALTER TABLE [dbo].[jobs] CHECK CONSTRAINT [FKg1t6ucxe8bgktug5heb36ulq0]
GO
ALTER TABLE [dbo].[jobs_industries]  WITH CHECK ADD  CONSTRAINT [FK8iedpberunsas1090w8hviw72] FOREIGN KEY([industries_industryid])
REFERENCES [dbo].[industries] ([industryid])
GO
ALTER TABLE [dbo].[jobs_industries] CHECK CONSTRAINT [FK8iedpberunsas1090w8hviw72]
GO
ALTER TABLE [dbo].[jobs_industries]  WITH CHECK ADD  CONSTRAINT [FKdfivpsfffukr44yb2lr9p7hmi] FOREIGN KEY([job_jobid])
REFERENCES [dbo].[jobs] ([jobid])
GO
ALTER TABLE [dbo].[jobs_industries] CHECK CONSTRAINT [FKdfivpsfffukr44yb2lr9p7hmi]
GO
ALTER TABLE [dbo].[notifications]  WITH CHECK ADD  CONSTRAINT [FKtockhlhmgah7lpxrernp6a34] FOREIGN KEY([userid])
REFERENCES [dbo].[users] ([userid])
GO
ALTER TABLE [dbo].[notifications] CHECK CONSTRAINT [FKtockhlhmgah7lpxrernp6a34]
GO
ALTER TABLE [dbo].[timelines]  WITH CHECK ADD  CONSTRAINT [FKrewb8ilk74gtbn1vxu1pok31h] FOREIGN KEY([candidateid])
REFERENCES [dbo].[candidates] ([candidateid])
GO
ALTER TABLE [dbo].[timelines] CHECK CONSTRAINT [FKrewb8ilk74gtbn1vxu1pok31h]
GO
/****** Object:  StoredProcedure [dbo].[DeleteJobsAndIndustries]    Script Date: 26/05/2024 10:32:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROCEDURE [dbo].[DeleteJobsAndIndustries] @jobId INT

AS

BEGIN

    BEGIN TRY

        BEGIN TRANSACTION;
 
        DELETE FROM jobs_industries WHERE job_jobid = @jobId;

        DELETE FROM jobs WHERE jobid = @jobId;
 
        COMMIT TRANSACTION;

    END TRY

    BEGIN CATCH

        IF @@TRANCOUNT > 0

            ROLLBACK TRANSACTION;
 
        -- In ra thông báo lỗi nếu cần

        PRINT ERROR_MESSAGE();

    END CATCH;

END;
GO
/****** Object:  StoredProcedure [dbo].[GetJobsByEmployer]    Script Date: 26/05/2024 10:32:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetJobsByEmployer] @numJobsToShow INT
AS
BEGIN

 SELECT TOP (@numJobsToShow)
    e.approved, e.reviewscore, e.employerid, e.rankid, e.address AS employer_address, e.background, e.description AS employer_description, e.email,
    e.employername, e.phone, e.photo AS employer_photo, e.provincename AS employer_province,
     LatestJob.removed, LatestJob.numposition, LatestJob.reuptimesleft, LatestJob.typeid, LatestJob.yearexperience, 
    LatestJob.expirationdate, LatestJob.jobid, LatestJob.maxsalary, LatestJob.minsalary, LatestJob.postdate, LatestJob.job_address, LatestJob.jobname, LatestJob.jobposition, LatestJob.location
FROM
    Job5.dbo.employers e
INNER JOIN (
    SELECT 
        j2.removed, j2.numposition, j2.reuptimesleft, j2.typeid, j2.yearexperience,
        j2.expirationdate, j2.jobid, j2.maxsalary, j2.minsalary, j2.postdate, j2.address AS job_address, j2.jobname, j2.jobposition, j2.location, j2.employerid,
        ROW_NUMBER() OVER(PARTITION BY j2.employerid ORDER BY j2.postdate DESC) AS RowNum
    FROM 
        Job5.dbo.jobs j2
	  WHERE
        j2.expirationdate > GETDATE() and j2.removed = 0
) AS LatestJob ON e.employerid = LatestJob.employerid
WHERE 
    e.rankid <= 4 AND
    LatestJob.RowNum = 1

ORDER BY
    CASE
        WHEN rankid = 4 THEN 1
        WHEN rankid = 3 THEN 2
        WHEN rankid = 2 THEN 3
        WHEN rankid = 1 THEN 4
    END,
    NEWID();

END;
GO
/****** Object:  StoredProcedure [dbo].[getTopEmployers]    Script Date: 26/05/2024 10:32:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[getTopEmployers]
AS
BEGIN
SELECT TOP(8) * FROM employers
ORDER BY
    CASE
        WHEN rankid = 4 THEN 1
        WHEN rankid = 3 THEN 2
        WHEN rankid = 2 THEN 3
        WHEN rankid = 1 THEN 4
    END, NEWID()
END
GO
/****** Object:  StoredProcedure [dbo].[quantityJobOfIndustryId]    Script Date: 26/05/2024 10:32:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[quantityJobOfIndustryId] 
AS
BEGIN
	SELECT TOP(8) i.industryid, industryname, COUNT(job_jobid) as quantity FROM industries i left join jobs_industries ji on i.industryid = ji.industries_industryid
GROUP BY i.industryid, industryname
ORDER BY quantity DESC
	
END;
GO
/****** Object:  StoredProcedure [dbo].[ResultSeachSQL]    Script Date: 26/05/2024 10:32:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[ResultSeachSQL] 
(@industryId BIGINT, @searchValue  NVARCHAR(255), @minSalary BIGINT,
 @maxSalary BIGINT, @location NVARCHAR(255), @experience INT, @typeJob INT,@skip INT, @limit INT)
AS
BEGIN
WITH ResultSearch AS (  select  j.* from jobs_industries ji right join jobs j on ji.job_jobid = j.jobid where (@industryId is null or @industryId = 0 or industries_industryid = @industryId) 
group by j.jobid,  j.removed, 
j.numposition, j.reuptimesleft, j.typeid, j.yearexperience, 
 j.employerid, j.expirationdate, j.maxsalary, j.minsalary, j.postdate, j.numposition, j.jobposition, j.address, j.jobname, j.location)

select * from ResultSearch where (@searchValue is null or @searchValue = 'null' or @searchValue = N'' or jobname like N'%'+ @searchValue +'%') 
	
	AND (
            (@minSalary IS NULL OR @minSalary = 0 OR minsalary >= @minSalary) and (minsalary <= @maxSalary)
            OR (@maxSalary IS NULL OR @maxSalary = 0 OR maxsalary <= @maxSalary) and (maxsalary >= @minSalary)
			OR (@maxSalary IS NULL OR @maxSalary = 0 OR maxsalary >= @maxSalary) and (minsalary <= @minSalary)
            OR (@minSalary = -1 AND @maxSalary = -1 AND minsalary = 0 AND maxsalary = 0)
        )
	and (@location is null or @location = '0' or @location = 'null' or @location = N'' or location like @location) 
	and (@experience is null or @experience = 0 or @experience = -1 or @experience = -2
															or (@experience = -3  and yearexperience = 0)
														 or (@experience <= 5 and yearexperience = @experience)
														or (@experience > 5 and yearexperience > 5))
	and (@typeJob = 0 or @typeJob is null or typeid = @typeJob) and removed = 0
	order by ResultSearch.postdate desc
	OFFSET @skip ROWS -- Skip a number of rows
    FETCH NEXT @limit ROWS ONLY; -- Fetch a number of rows after skipping
END;
GO
/****** Object:  StoredProcedure [dbo].[UpdateJobReup]    Script Date: 26/05/2024 10:32:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROCEDURE [dbo].[UpdateJobReup]

    @jobId INT

AS

BEGIN

    -- Declare variables to store displaytime and calculated expiration date

    DECLARE @displaytime INT;

    DECLARE @expirationDate DATETIME;
 
    -- Get displaytime for the given job

    SELECT @displaytime = displaytime

    FROM ranks r

    JOIN employers e ON r.rankid = e.rankid

    JOIN jobs j ON j.employerid = e.employerid

    WHERE j.jobid = @jobId;
 
    -- Calculate expiration date

    SET @expirationDate = DATEADD(DAY, @displaytime, GETDATE());
 
    -- Update job information

    UPDATE jobs

    SET 

        postdate = GETDATE(),

        ExpirationDate = @expirationDate,

		reuptimesleft = reuptimesleft - 1

    WHERE jobId = @jobId;

END;
GO
USE [master]
GO
ALTER DATABASE [job5] SET  READ_WRITE 
GO

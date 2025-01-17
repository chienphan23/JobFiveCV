USE [Job5]
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







SET IDENTITY_INSERT [dbo].[jobtypes] ON 

INSERT [dbo].[jobtypes] ([typeid], [type]) VALUES (1, N'Parttime')
INSERT [dbo].[jobtypes] ([typeid], [type]) VALUES (2, N'Fulltime')
SET IDENTITY_INSERT [dbo].[jobtypes] OFF
GO



GO
SET IDENTITY_INSERT [dbo].[industries] ON 

INSERT [dbo].[industries] ([industryid], [industryname]) VALUES (1, N'Công nghệ thông tin')
INSERT [dbo].[industries] ([industryid], [industryname]) VALUES (2, N'Ngân hàng')
INSERT [dbo].[industries] ([industryid], [industryname]) VALUES (3, N'Thương mại điện tử')
INSERT [dbo].[industries] ([industryid], [industryname]) VALUES (4, N'Bưu chính viễn thông')
SET IDENTITY_INSERT [dbo].[industries] OFF




SET IDENTITY_INSERT [dbo].[applicationstatus] ON
 
INSERT [dbo].[applicationstatus] ([status], [description]) VALUES (1, N'Vừa ứng tuyển')
INSERT [dbo].[applicationstatus] ([status], [description]) VALUES (2, N'Đã duyệt')
INSERT [dbo].[applicationstatus] ([status], [description]) VALUES (3, N'Từ chối')
SET IDENTITY_INSERT [dbo].[applicationstatus] OFF




create TRIGGER InsertUserRoleTrigger
ON users
AFTER INSERT
AS
BEGIN
    DECLARE @userid INT, @role nvarchar(50);
    -- Lấy userid và role từ bản ghi vừa được chèn vào bảng users
    SELECT @userid = userid, @role = role
    FROM inserted;
    -- Kiểm tra nếu role là 1 (employer)
    IF @role = 'employer'
    BEGIN
        INSERT INTO employers (employerid, [rankid], reviewscore, background, photo, approved)
        VALUES (@userid, 1, 0,  'nobackground.png','nophoto.png', 0);
    END
    -- Kiểm tra nếu role là 2 (candidate)
    ELSE IF @role = 'candidate'
    BEGIN
        INSERT INTO candidates (candidateid, yearexperience, photo)
        VALUES (@userid, 0, 'nophoto.png');
    END
END;

GO
/*
USE [Job5]
GO
/****** Object:  StoredProcedure [dbo].[GetJobsByEmployer]    Script Date: 5/25/2024 3:40:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
alter PROCEDURE [dbo].[GetJobsByEmployer] @numJobsToShow INT
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

exec GetJobsByEmployer @numJobsToShow = 8;
*/
/*exec GetJobsByEmployer @numJobsToShow = 6*/

/*
USE [Job5]
GO
/****** Object:  StoredProcedure [dbo].[ResultSeachSQL]    Script Date: 5/25/2024 9:35:54 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
alter PROCEDURE [dbo].[ResultSeachSQL] 
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

EXEC ResultSeachSQL @industryId = 0, @searchValue = '', @minSalary = 0, @maxSalary = 0, @location =  '', @experience = 0, @typeJob = 0, @skip = 12, @limit = 4*/




/*
alter PROCEDURE quantityJobOfIndustryId 
AS
BEGIN
	SELECT TOP(8) i.industryid, industryname, COUNT(job_jobid) as quantity FROM industries i left join jobs_industries ji on i.industryid = ji.industries_industryid
GROUP BY i.industryid, industryname
ORDER BY quantity DESC
	
END;
exec quantityJobOfIndustryId ;
*/



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
SET IDENTITY_INSERT [dbo].[ranks] ON
 
INSERT [dbo].[ranks] ([displaytime], [limitpost],  [price], [reuptimes],  [description], [rankname], [photo]) VALUES (7, 1,  0, 1, N'Thành viên', N'Thành viên', N'thanhvien.png')
INSERT [dbo].[ranks] ([displaytime], [limitpost],  [price], [reuptimes],  [description], [rankname], [photo]) VALUES (14, 2,  1000000, 2, N'Bạc', N'Bạc', N'bac.png')
INSERT [dbo].[ranks] ([displaytime], [limitpost],  [price], [reuptimes],  [description], [rankname], [photo]) VALUES (21, 3,  2000000, 3, N'Vàng', N'Vàng', N'vang.png')
INSERT [dbo].[ranks] ([displaytime], [limitpost],  [price], [reuptimes], [description], [rankname], [photo]) VALUES (30, 4,  3000000,  4, N'Kim cương', N'Kim cương', N'kimcuong.png')
SET IDENTITY_INSERT [dbo].[ranks] OFF
GO







CREATE TRIGGER [dbo].[update_employer_rating]

ON [dbo].[employerreviews]

AFTER INSERT

AS

BEGIN

    DECLARE @avg_rating DECIMAL(3, 2);
 
    -- Tính điểm trung bình của employer dựa trên tất cả các review

    SELECT @avg_rating = AVG(score)

    FROM employerreviews

    WHERE employerId = (SELECT employerId FROM inserted);
 
    -- Cập nhật điểm trung bình vào bảng employer

    UPDATE employers

    SET reviewscore = @avg_rating

    WHERE employerId = (SELECT employerId FROM inserted);

END;


CREATE PROCEDURE getTopEmployers
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
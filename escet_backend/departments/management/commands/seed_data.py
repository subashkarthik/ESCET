from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from departments.models import Department
from news.models import News
from facilities.models import Facility
from gallery.models import GalleryImage, GalleryVideo
from management_team.models import ManagementMember
from scholarships.models import Scholarship

User = get_user_model()


class Command(BaseCommand):
    help = 'Seed database with initial data from frontend constants'

    def handle(self, *args, **kwargs):
        self.stdout.write(self.style.SUCCESS('Starting data seeding...'))

        # Create superuser if not exists
        self.seed_superuser()

        # Seed all models
        self.seed_departments()
        self.seed_news()
        self.seed_facilities()
        self.seed_gallery()
        self.seed_management()
        self.seed_scholarships()

        self.stdout.write(self.style.SUCCESS('[OK] Data seeding completed successfully!'))

    def seed_superuser(self):
        """Create default superuser"""
        if not User.objects.filter(username='admin').exists():
            User.objects.create_superuser(
                username='admin',
                email='admin@escet.edu',
                password='admin123',
                first_name='Admin',
                last_name='User'
            )
            self.stdout.write(self.style.SUCCESS('[OK] Created superuser (username: admin, password: admin123)'))
        else:
            self.stdout.write('[OK] Superuser already exists')

    def seed_departments(self):
        """Seed departments data"""
        departments_data = [
            {
                'id': 'cse',
                'name': 'B.E - Computer Science and Engineering',
                'short_name': 'CSE',
                'hod': 'Dr. Sarah Mitchell',
                'description': 'The primary goal of the department of CSE is to provide best IT infrastructure, world class learning & inculcate moral and ethical values.',
                'labs': ['AI & Robotics Lab', 'Cloud Computing Lab', 'Cybersecurity Center'],
                'image': 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop'
            },
            {
                'id': 'it',
                'name': 'B.Tech - Information Technology',
                'short_name': 'IT',
                'hod': 'Dr. M. Sivasakthi',
                'description': 'Unleash your potential and embrace the endless possibilities that the world of information technology has to offer.',
                'labs': ['Web Tech Lab', 'Network Security Lab', 'Data Analytics Hub'],
                'image': 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop'
            },
            {
                'id': 'aids',
                'name': 'B.Tech - Artificial Intelligence and Data Science',
                'short_name': 'AIDS',
                'hod': 'Dr. R. Priyadharshini',
                'description': 'The Department of AI & DS was setup with responsibilities for designing and developing AI and data science solutions.',
                'labs': ['AI Research Lab', 'Big Data Lab', 'Cognitive Computing'],
                'image': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop'
            },
            {
                'id': 'ece',
                'name': 'B.E - Electronics and Communication Engineering',
                'short_name': 'ECE',
                'hod': 'Dr. Robert Chen',
                'description': 'The sole aim of the Department of Electronics and Communication is to produce the most energetic and professionally competent Electronic Engineers.',
                'labs': ['VLSI Lab', 'Communication Hub', 'Embedded Systems'],
                'image': 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop'
            },
            {
                'id': 'eee',
                'name': 'B.E - Electrical and Electronics Engineering',
                'short_name': 'EEE',
                'hod': 'Dr. Elena Rodriguez',
                'description': 'The Department of Electrical and electronics Engineering is proud in shaping the future of technology through excellence in education & research.',
                'labs': ['Power Systems Lab', 'Renewable Energy', 'Electrical Machines'],
                'image': 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop'
            },
            {
                'id': 'mech',
                'name': 'B.E. Mechanical Engineering',
                'short_name': 'MECH',
                'hod': 'Dr. James Foster',
                'description': 'At the Department of Mechanical Engineering, we provide a dynamic learning environment that prepares our students to become skilled engineers.',
                'labs': ['Robotics & Automation', 'Thermal Lab', 'Fluid Mechanics'],
                'image': 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=2070&auto=format&fit=crop'
            },
            {
                'id': 'civil',
                'name': 'B.E.-Civil Engineering',
                'short_name': 'CIVIL',
                'hod': 'Dr. William Grant',
                'description': 'Department of civil engineering is committed in providing a comprehensive education that combines theory and practical application.',
                'labs': ['Structural Lab', 'Geo-Tech Lab', 'Surveying Center'],
                'image': 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop'
            }
        ]

        for dept_data in departments_data:
            Department.objects.get_or_create(id=dept_data['id'], defaults=dept_data)
        
        self.stdout.write(self.style.SUCCESS(f'[OK] Seeded {len(departments_data)} departments'))

    def seed_news(self):
        """Seed news data"""
        news_data = [
            {
                'title': 'Annual Tech Symposium: IGNITE 2024',
                'description': 'Join us for a three-day celebration of innovation, featuring guest speakers from NASA and Google.',
                'date': 'OCT 24, 2024',
                'category': 'Event'
            },
            {
                'title': 'International Seminar on Quantum Computing',
                'description': 'Deep dive into the future of computing with world-renowned physicists.',
                'date': 'NOV 02, 2024',
                'category': 'Seminar'
            },
            {
                'title': 'NCAA Sports Championship Victory',
                'description': 'Our basketball team secures the regional title for the third consecutive year.',
                'date': 'OCT 15, 2024',
                'category': 'Achievement'
            }
        ]

        for news_item in news_data:
            News.objects.get_or_create(title=news_item['title'], defaults=news_item)
        
        self.stdout.write(self.style.SUCCESS(f'[OK] Seeded {len(news_data)} news items'))

    def seed_facilities(self):
        """Seed facilities data"""
        facilities_data = [
            {
                'name': 'Central Library',
                'icon': 'BookOpen',
                'description': 'A 4-story knowledge hub with over 100,000 volumes and digital access to IEEE journals.',
                'images': ['https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop']
            },
            {
                'name': 'Advanced Research Lab',
                'icon': 'FlaskConical',
                'description': 'Equipped with the latest industry-standard tools for robotics and nanotechnology research.',
                'images': ['https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop']
            },
            {
                'name': 'Sports Complex',
                'icon': 'Dumbbell',
                'description': 'Featuring Olympic-sized pools, indoor stadium, and multi-purpose athletic fields.',
                'images': ['https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop']
            }
        ]

        for facility_data in facilities_data:
            Facility.objects.get_or_create(name=facility_data['name'], defaults=facility_data)
        
        self.stdout.write(self.style.SUCCESS(f'[OK] Seeded {len(facilities_data)} facilities'))

    def seed_gallery(self):
        """Seed gallery data"""
        images_data = [
            {
                'title': 'Main Campus Building',
                'url': 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop',
                'category': 'campus',
                'description': 'Our state-of-the-art main campus building'
            },
            {
                'title': 'Annual Tech Symposium',
                'url': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop',
                'category': 'events',
                'description': 'Students presenting innovative projects'
            },
            {
                'title': 'Computer Science Lab',
                'url': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
                'category': 'labs',
                'description': 'Advanced computing facilities'
            }
        ]

        for img_data in images_data:
            GalleryImage.objects.get_or_create(title=img_data['title'], defaults=img_data)

        videos_data = [
            {
                'title': 'ESCET Campus Tour',
                'thumbnail': 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop',
                'url': 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                'duration': '03:45'
            }
        ]

        for video_data in videos_data:
            GalleryVideo.objects.get_or_create(title=video_data['title'], defaults=video_data)
        
        self.stdout.write(self.style.SUCCESS(f'[OK] Seeded {len(images_data)} images and {len(videos_data)} videos'))

    def seed_management(self):
        """Seed management team data"""
        management_data = [
            {
                'name': 'E.Swamikkannu',
                'role': "Founder Chairman's Message",
                'image': '/images/founder-chairman.jpg',
                'message': 'Nurturing excellence through vision and dedication to the future of engineering education.',
                'path': '/about/chairman-message',
                'order': 1
            },
            {
                'name': 'Er.S.Selvamani',
                'role': "Chairman's Message",
                'image': '/images/chairman.jpg',
                'message': 'Empowering students with innovative skills to lead in a rapidly evolving technological landscape.',
                'path': '/about/chairman-message',
                'order': 2
            },
            {
                'name': 'Dr.K.Indira',
                'role': "Principal's Message",
                'image': '/images/principal(1).jpg',
                'message': 'Committed to academic rigor and holistic development of our engineering professionals.',
                'path': '/about/principal-message',
                'order': 3
            }
        ]

        for member_data in management_data:
            ManagementMember.objects.get_or_create(name=member_data['name'], defaults=member_data)
        
        self.stdout.write(self.style.SUCCESS(f'[OK] Seeded {len(management_data)} management members'))

    def seed_scholarships(self):
        """Seed scholarships data"""
        scholarships_data = [
            {
                'name': 'Merit Scholarship',
                'description': 'For students with exceptional academic performance',
                'eligibility': 'Minimum 90% in qualifying examination',
                'amount': '50% tuition fee waiver',
                'application_deadline': 'June 30, 2024'
            },
            {
                'name': 'Sports Excellence Scholarship',
                'description': 'For students with outstanding sports achievements',
                'eligibility': 'State/National level sports participation',
                'amount': '25% tuition fee waiver',
                'application_deadline': 'July 15, 2024'
            }
        ]

        for scholarship_data in scholarships_data:
            Scholarship.objects.get_or_create(name=scholarship_data['name'], defaults=scholarship_data)
        
        self.stdout.write(self.style.SUCCESS(f'[OK] Seeded {len(scholarships_data)} scholarships'))

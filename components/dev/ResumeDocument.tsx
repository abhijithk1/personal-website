'use client';

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from '@react-pdf/renderer';
import { personalInfo } from '@/data/personal';
import { experiences, education } from '@/data/experience';
import { skills, skillCategories } from '@/data/skills';
import { projects } from '@/data/projects';
import { certifications } from '@/data/certifications';

/*
  NOTE: @react-pdf/renderer only supports TTF/OTF fonts — NOT WOFF2.
  We use the built-in PDF standard fonts (Helvetica family) which
  render perfectly without any network requests.
  Bold weight → fontFamily: 'Helvetica-Bold'
  Italic      → fontFamily: 'Helvetica-Oblique'
*/

/* ── Color palette ── */
const C = {
  primary:   '#111827',
  secondary: '#374151',
  muted:     '#6B7280',
  accent:    '#1D4ED8',
  border:    '#D1D5DB',
  bgLight:   '#F3F4F6',
};

/* ── Styles ── */
const s = StyleSheet.create({

  /* Page */
  page: {
    fontFamily: 'Helvetica',
    fontSize: 9.5,
    color: C.secondary,
    paddingTop: 40,
    paddingBottom: 48,
    paddingHorizontal: 44,
  },

  /* ─── HEADER ─── */
  header: {
    flexDirection: 'column',
    marginBottom: 12,
    paddingBottom: 10,
    borderBottomWidth: 1.5,
    borderBottomColor: C.accent,
  },
  name: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 24,
    color: C.primary,
    lineHeight: 1.1,            /* explicit lineHeight prevents overlap */
    marginBottom: 4,
  },
  headline: {
    fontFamily: 'Helvetica',
    fontSize: 9.5,
    color: C.accent,
    lineHeight: 1.3,
    marginBottom: 8,
  },

  /* Contact row — all items on one line */
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  contactText: {
    fontFamily: 'Helvetica',
    fontSize: 8,
    color: C.muted,
    lineHeight: 1,
  },
  contactLink: {
    fontFamily: 'Helvetica',
    fontSize: 8,
    color: C.accent,
    textDecoration: 'none',
    lineHeight: 1,
  },
  contactSep: {
    fontFamily: 'Helvetica',
    fontSize: 8,
    color: C.border,
    lineHeight: 1,
    paddingHorizontal: 4,
  },

  /* ─── SECTION WRAPPER ─── */
  section: {
    marginBottom: 11,
  },
  sectionTitle: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 8,
    color: C.primary,
    textTransform: 'uppercase',
    letterSpacing: 1.4,
    lineHeight: 1,
    paddingBottom: 4,
    marginBottom: 7,
    borderBottomWidth: 0.75,
    borderBottomColor: C.border,
  },

  /* ─── SUMMARY ─── */
  summaryText: {
    fontFamily: 'Helvetica',
    fontSize: 9,
    color: C.secondary,
    lineHeight: 1.55,
  },

  /* ─── EXPERIENCE ─── */
  expBlock: {
    marginBottom: 9,
  },
  expTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 1,
  },
  expRole: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 10,
    color: C.primary,
    lineHeight: 1.2,
  },
  expPeriod: {
    fontFamily: 'Helvetica',
    fontSize: 8,
    color: C.muted,
    lineHeight: 1.2,
  },
  expCompany: {
    fontFamily: 'Helvetica',
    fontSize: 9,
    color: C.accent,
    lineHeight: 1.2,
    marginBottom: 4,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 2,
    paddingLeft: 4,
  },
  bulletDot: {
    fontFamily: 'Helvetica',
    fontSize: 8.5,
    color: C.accent,
    lineHeight: 1.5,
    width: 10,
    flexShrink: 0,
  },
  bulletText: {
    fontFamily: 'Helvetica',
    fontSize: 8.5,
    color: C.secondary,
    lineHeight: 1.5,
    flex: 1,
  },

  /* ─── SKILLS ─── */
  skillRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  skillCatLabel: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 8.5,
    color: C.primary,
    lineHeight: 1.4,
    width: 108,
    flexShrink: 0,
  },
  skillCatColon: {
    fontFamily: 'Helvetica',
    fontSize: 8.5,
    color: C.muted,
    lineHeight: 1.4,
    marginRight: 4,
    flexShrink: 0,
  },
  skillList: {
    fontFamily: 'Helvetica',
    fontSize: 8.5,
    color: C.secondary,
    lineHeight: 1.4,
    flex: 1,
  },

  /* ─── PROJECTS ─── */
  projBlock: {
    marginBottom: 8,
  },
  projTitle: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 9.5,
    color: C.primary,
    lineHeight: 1.2,
    marginBottom: 2,
  },
  projDesc: {
    fontFamily: 'Helvetica',
    fontSize: 8.5,
    color: C.secondary,
    lineHeight: 1.5,
    marginBottom: 2,
  },
  projTech: {
    fontFamily: 'Helvetica-Oblique',
    fontSize: 8,
    color: C.muted,
    lineHeight: 1.2,
  },

  /* ─── EDUCATION ─── */
  eduBlock: {
    marginBottom: 7,
  },
  eduTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 1,
  },
  eduDegree: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 9.5,
    color: C.primary,
    lineHeight: 1.2,
    flex: 1,
    marginRight: 8,
  },
  eduPeriod: {
    fontFamily: 'Helvetica',
    fontSize: 8,
    color: C.muted,
    lineHeight: 1.2,
  },
  eduInstitution: {
    fontFamily: 'Helvetica',
    fontSize: 9,
    color: C.accent,
    lineHeight: 1.3,
    marginBottom: 1,
  },
  eduMeta: {
    fontFamily: 'Helvetica',
    fontSize: 8.5,
    color: C.secondary,
    lineHeight: 1.3,
  },

  /* ─── CERTIFICATIONS ─── */
  certBlock: {
    marginBottom: 5,
  },
  certName: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 9,
    color: C.primary,
    lineHeight: 1.2,
  },
  certMeta: {
    fontFamily: 'Helvetica',
    fontSize: 8,
    color: C.muted,
    lineHeight: 1.3,
  },

  /* ─── PAGE FOOTER ─── */
  pageFooter: {
    position: 'absolute',
    bottom: 18,
    left: 44,
    right: 44,
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontSize: 7,
    color: C.muted,
    lineHeight: 1,
  },
});

/* ─── Separator helper ─── */
function Sep() {
  return <Text style={s.contactSep}>|</Text>;
}

/* ─── Resume Document ─── */
export default function ResumeDocument() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <Document
      title={`${personalInfo.name} - Resume`}
      author={personalInfo.name}
      subject="Professional Resume"
      keywords="software developer, golang, python, kubernetes, AI, resume"
    >
      <Page size="A4" style={s.page}>

        {/* ═══ HEADER ═══ */}
        <View style={s.header}>
          <Text style={s.name}>{personalInfo.name}</Text>
          <Text style={s.headline}>{personalInfo.headline}</Text>
          <View style={s.contactRow}>
            <Text style={s.contactText}>{personalInfo.email}</Text>
            <Sep />
            <Text style={s.contactText}>{personalInfo.phone}</Text>
            <Sep />
            <Text style={s.contactText}>{personalInfo.location}</Text>
            <Sep />
            <Link src={personalInfo.linkedin} style={s.contactLink}>LinkedIn</Link>
            <Sep />
            <Link src={personalInfo.github} style={s.contactLink}>GitHub</Link>
            <Sep />
            <Link src={personalInfo.medium} style={s.contactLink}>Medium</Link>
          </View>
        </View>

        {/* ═══ PROFESSIONAL SUMMARY ═══ */}
        <View style={s.section}>
          <Text style={s.sectionTitle}>Professional Summary</Text>
          <Text style={s.summaryText}>{personalInfo.summary}</Text>
        </View>

        {/* ═══ WORK EXPERIENCE ═══ */}
        <View style={s.section}>
          <Text style={s.sectionTitle}>Work Experience</Text>
          {experiences.map((exp) => (
            <View key={`${exp.company}-${exp.role}`} style={s.expBlock}>
              <View style={s.expTopRow}>
                <Text style={s.expRole}>{exp.role}</Text>
                <Text style={s.expPeriod}>{exp.period}</Text>
              </View>
              <Text style={s.expCompany}>{exp.company}</Text>
              {exp.highlights.map((h, i) => (
                <View key={i} style={s.bulletRow}>
                  <Text style={s.bulletDot}>-</Text>
                  <Text style={s.bulletText}>{h}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        {/* ═══ TECHNICAL SKILLS ═══ */}
        <View style={s.section}>
          <Text style={s.sectionTitle}>Technical Skills</Text>
          {skillCategories.map((cat) => {
            const catSkills = skills.filter((sk) => sk.category === cat);
            if (catSkills.length === 0) return null;
            return (
              <View key={cat} style={s.skillRow}>
                <Text style={s.skillCatLabel}>{cat}</Text>
                <Text style={s.skillCatColon}>:</Text>
                <Text style={s.skillList}>
                  {catSkills.map((sk) => sk.name).join('  •  ')}
                </Text>
              </View>
            );
          })}
        </View>

        {/* ═══ FEATURED PROJECTS ═══ */}
        <View style={s.section}>
          {/* wrap={false} keeps the heading + first project together on the same page,
              preventing an orphaned section title at the bottom of a page */}
          <View wrap={false}>
            <Text style={s.sectionTitle}>Featured Projects</Text>
            {featuredProjects[0] && (
              <View style={s.projBlock}>
                <Text style={s.projTitle}>{featuredProjects[0].title}</Text>
                <Text style={s.projDesc}>{featuredProjects[0].description}</Text>
                <Text style={s.projTech}>Tech Stack: {featuredProjects[0].tech.join('  •  ')}</Text>
              </View>
            )}
          </View>
          {featuredProjects.slice(1).map((proj) => (
            <View key={proj.title} style={s.projBlock}>
              <Text style={s.projTitle}>{proj.title}</Text>
              <Text style={s.projDesc}>{proj.description}</Text>
              <Text style={s.projTech}>Tech Stack: {proj.tech.join('  •  ')}</Text>
            </View>
          ))}
        </View>

        {/* ═══ EDUCATION ═══ */}
        <View style={s.section}>
          <Text style={s.sectionTitle}>Education</Text>
          {education.map((edu) => (
            <View key={`${edu.institution}-${edu.degree}`} style={s.eduBlock}>
              <View style={s.eduTopRow}>
                <Text style={s.eduDegree}>{edu.degree}</Text>
                <Text style={s.eduPeriod}>{edu.period}</Text>
              </View>
              <Text style={s.eduInstitution}>{edu.institution}  —  {edu.location}</Text>
              <Text style={s.eduMeta}>{edu.field}  |  {edu.grade}</Text>
            </View>
          ))}
        </View>

        {/* ═══ CERTIFICATIONS ═══ */}
        <View style={s.section}>
          <Text style={s.sectionTitle}>Certifications</Text>
          {certifications.map((cert) => (
            <View key={cert.name} style={s.certBlock}>
              <Text style={s.certName}>{cert.name}</Text>
              <Text style={s.certMeta}>{cert.issuer}  |  {cert.date}</Text>
            </View>
          ))}
        </View>

        {/* ═══ FOOTER ═══ */}
        <Text style={s.pageFooter}>
          {personalInfo.name}  |  {personalInfo.email}  |  {personalInfo.availability}
        </Text>

      </Page>
    </Document>
  );
}

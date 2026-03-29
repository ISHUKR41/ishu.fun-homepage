// components/sections/TrustBar/TrustBar.jsx
import SectionWrapper from '../../ui/SectionWrapper/SectionWrapper';
import styles from './TrustBar.module.css';

const trustOrgs = [
  { name: 'NTA', full: 'National Testing Agency' },
  { name: 'UPSC', full: 'Union Public Service Commission' },
  { name: 'SSC', full: 'Staff Selection Commission' },
  { name: 'Railways', full: 'Indian Railways' },
  { name: 'IBPS', full: 'Institute of Banking Personnel' },
  { name: 'CBSE', full: 'Central Board of Secondary Education' },
  { name: 'UGC', full: 'University Grants Commission' },
];

export default function TrustBar() {
  const items = [...trustOrgs, ...trustOrgs];
  return (
    <section className={styles.trustBar}>
      <div className={styles.label}>Results from Official Sources</div>
      <div className={styles.track}>
        {items.map((org, i) => (
          <div key={`${org.name}-${i}`} className={styles.orgBadge}>
            <span className={styles.orgName}>{org.name}</span>
            <span className={styles.orgFull}>{org.full}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

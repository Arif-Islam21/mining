import React from 'react';
import { ChevronRight } from 'lucide-react';

const HomeTaskHall = () => {
  const activities = [
    {
      id: 1,
      title: "Share the invitation link, and if the LEV1 team reaches more than 50...",
      reward: "13.00 USDT",
    },
    {
      id: 2,
      title: "Publish ads, share the platform, and get rewards of 13-72 USDT.",
      reward: "72.00 USDT",
    }
  ];

  const styles = {
    container: {
      borderRadius: '10px',
      width: '100%',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '16px',
      backgroundColor: '#ecf1ff',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '16px'
    },
    title: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#333'
    },
    seeMore: {
      fontSize: '12px',
      color: '#000',
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      TextDecoder: 'none',
    },
    activitiesContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    },
    activityItem: {
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: '12px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      cursor: 'pointer',
      transition: 'box-shadow 0.2s ease'
    },
    itemContent: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    iconContainer: {
      width: '48px',
      height: '48px',
      backgroundImage: 'url(src/assets/images/logo.svg)', 
      backgroundSize: 'cover',
      backgroundColor: 'black',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    },
    iconText: {
      color: '#ff0000',
      fontWeight: 'bold',
      fontSize: '14px'
    },
    titleContainer: {
      flexGrow: 1,
      minWidth: 0
    },
    titleText: {
      fontSize: '14px',
      color: '#444',
      margin: 0,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical'
    },
    rewardContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      flexShrink: 0
    },
    rewardText: {
      color: '#00c853',
      fontSize: '14px',
      whiteSpace: 'nowrap'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Activitys</h2>
        <button style={styles.seeMore}>See more&gt;</button>
      </div>

      <div style={styles.activitiesContainer}>
        {activities.map((activity) => (
          <div 
            key={activity.id} 
            style={styles.activityItem}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
            }}
          >
            <div style={styles.itemContent}>
              <div style={styles.iconContainer}>
                <span style={styles.iconText}>{activity.icon}</span>
              </div>
              
              <div style={styles.titleContainer}>
                <p style={styles.titleText}>{activity.title}</p>
              </div>

              <div style={styles.rewardContainer}>
                <span style={styles.rewardText}>{activity.reward}</span>
                <ChevronRight size={20} color="#999" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeTaskHall;